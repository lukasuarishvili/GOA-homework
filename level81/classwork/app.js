

const title = document.createElement("h1");
title.textContent = "goa best";

const text = document.createElement("p");

text.textContent="first child ||  Lorem ipsum dolor sit amet consectetur adipisicing elit. ";

const link =document.createElement("a");

link.textContent="seconde child ||  link to website";

const button=document.createElement("h4");

button.textContent="press it";

document.querySelector("Header").append(title);

document.querySelector("main").append(text ,link , button) ;

document.querySelector("main").removeChild(link)

for (let i =0; i<10;i++){
    const say= document.createElement("p")

    say.textContent="hello there" +String(i)
    document.querySelector("footer").append(say)
}

const array=[0,1,2,3,4,5,6,7]

array.forEach((Element) =>{
    console.log(Element)
});