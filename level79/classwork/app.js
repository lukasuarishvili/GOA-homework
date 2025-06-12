
const main = document.querySelector("button")

main.addEventListener("click", () => {
    document.getElementById("bt").style.backgroundColor = "blue";
});


function biger(item) {
    item.style.height = "200px";
    item.style.width = "200px";
}

function out(item) {
    item.style.height = "50px";
    item.style.width = "50px";
}

/* 
3)
 რა განსხვავებაა onmouseover და onmouseout დაწერე კომენტარების მეშვეობით და ასევე ახსენი რა გასხვავება onmouseup და onmousedown შორის 

 onmouseover-არის ელემენტზე არის მაოუსი და onmouseout ეს როდესაც არ არის მაუსი 
 onmouseup-არის როდესაც პარაგრაფზე აშვებულია მაუსი onmousedown- როდესაც მაუსი აჭერ პარაგრაფს
 */



