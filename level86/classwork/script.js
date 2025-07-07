const img = document.querySelector("img");
console.log(img)
let counter = 0;

let array = ["./assets/istockphoto-1274530764-612x612.jpg" , "./assets/photo-1506104489822-562ca25152fe.jpg"]
const images= {
    num1 :["./assets/istockphoto-1274530764-612x612.jpg"],
    num2: ["./assets/photo-1506104489822-562ca25152fe.jpg"] ,   
}


function previousButton(curent_pos) {
    console.log("previousButton")
    img.src = images[num1]
}

function nextButton() {
    console.log("nextButton")
    img.src= array[1]
}

