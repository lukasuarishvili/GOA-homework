const rats = [];//anotations
const categories=[];//categories
const images=[];
const ul=document.querySelector("body")


const annotations = () => {
    const http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            let response = JSON.parse(this.responseText)
            

            response.annotations.forEach(element => {
                rats.push(element)
            });

            response.categories.forEach(element=>{
                categories.push(element)
            });

            response.images.forEach(element=>{
                images.push(element)
            });

            rats.forEach(createRat);
        };

    }

    http.open("GET", "./test/annotations.coco.json");
    http.send();
}



console.log(rats);
console.log(categories);
console.log(images)

function createRat(obj){
    let li= document.createElement("li");
    li.textContent=`${obj.id} ${getimage(obj.image_id)} ${obj.bbox} ${obj.area}` 
    ul.appendChild(li)
}

function getimage(id){
    return images.at(id)
}

annotations();