
//virables
let itemtext = document.getElementById("item-text");

let additem = document.getElementById("add-item");

let itemlist = [];

let doclist= document.querySelector("ul");

let clear= document.getElementById("clear-items")


// add buttons evenlistiner
additem.addEventListener("click", () => {
    itemlist.push(itemtext.value)
    
    displayItems(doclist, itemtext , itemlist)

    itemtext.value = ""
})

//clear button event listiner

clear.addEventListener("click",()=>{
    doclist.textContent=""
})

// a function to display the list item 
function displayItems(doclist, itemtext, itemlist) {
    doclist.textContent = ""; // Clear previous items
    itemlist.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "flex items-center justify-between bg-gray-700 text-white px-4 py-3 rounded-lg shadow-sm";
        doclist.appendChild(li);
    });
}




