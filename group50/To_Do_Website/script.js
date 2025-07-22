//virables
let iteminput = document.getElementById("item-text");
let addItemBtn = document.getElementById("add-item");
let clear = document.getElementById("clear-items");
let listElement = document.querySelector("ul");
let filterBtn = document.getElementById("filter-btn");
let filterText = document.getElementById("filter-text");

let listItems = [];
let userItems = [];


//XMLhttpsRequest 
const http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/todos");
http.onload = function () {
    if (http.status === 200) {
        const data = JSON.parse(http.responseText);
        console.log(data);
        localStorage.setItem("obj", JSON.stringify(data));
        const saved = JSON.parse(localStorage.getItem("obj"));
        saved.forEach(createUl)
    } else {
        console.log(http.status);
    }
};

http.onerror = function () {
    console.log(`its bad ${http.status}`);
};
http.send();

// a function to display the list item 
function displayItems(doclist, itemlist) {
    doclist.textContent = ""; // Clear previous items
    itemlist.forEach((item) => {
        doclist.appendChild(item);
    });

    if (localStorage.getItem("user") != null) {
        console.log(localStorage.getItem("user"))
        const useritem = createliitem(localStorage.getItem("user"))
        doclist.appendChild(useritem)
    }
}

function createUl(thing) {
    let li = createliitem(thing);
    listItems.push(li)
    listElement.appendChild(li);
    userItems.push(li)
}


function additem(inputEl) {
    const value = createliitem(inputEl.value.trim())
    if (inputEl.value.trim() === "") {
        alert("Fill the input");
    } else {
        listItems.push(value);
        displayItems(listElement, listItems);
        localStorage.setItem("user", inputEl.value);
        inputEl.value = "";
    }
}

function createliitem(item) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    switch (typeof item) {

        case "string":
            p.textContent = item;
            div1.textContent = ""
            div2.textContent = ""
            li.appendChild(p)
            break
        case "object":
            p.textContent = item.title;
            div1.textContent = `completed: ${item.completed}`;
            if (item.completed === true) {
                div1.className = "bg-green-500 hover:bg-green-700 px-3.5 py-3 rounded-lg text-white font-semibold transition duration-200 text-sm sm:text-base";
            } else {
                div1.className = "bg-red-400 hover:bg-red-500 px-3.5 py-3 rounded-lg text-white font-semibold transition duration-200 text-sm sm:text-base";
            }
            div2.textContent = `id: ${item.id}`

            li.appendChild(p);
            li.appendChild(div1);
            li.appendChild(div2);
            break

    }

    li.className = "flex flex-wrap gap-4 sm:gap-8 items-center justify-between bg-gray-700 text-white px-4 py-3 rounded-lg shadow-sm";
    p.className = "flex-1 min-w-[150px] text-sm sm:text-base";
    div2.className = "bg-yellow-500 hover:bg-yellow-700 px-3.5 py-3 rounded-lg text-white font-semibold transition duration-200 text-sm sm:text-base";
    return li;
}

function filteritem(task) {
    if (typeof task == "object") {
        return task.completed ? true : false
    }
}

function filterTasks(tasks,) {
    switch (tasks) {
        case "completed":
            for (let task of listItems) {
                if (filteritem(task) === false) {
                    const index = listItems.indexOf(task);
                    if (index > -1) {
                        listItems.splice(index, 1);
                    }
                    displayItems(listElement, listItems)
                }
            }
    }


}


//clear button event listiner
clear.addEventListener("click", () => {
    listElement.textContent = "";
    listItems = [];
});



// add buttons event listener
addItemBtn.addEventListener("click", () => additem(iteminput))

//filter button event listiner
filterBtn.addEventListener("click", () => filterTasks(filterText))

/* 
when creating a task add a alert/input type thing make it preati and it askes if task is copmpleted or not also add a filter mechanizsm , fix the local storage and also give it an id 
*/