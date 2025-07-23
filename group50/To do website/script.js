//virables
let iteminput = document.getElementById("item-text");
let idInput = document.getElementById("idinput");
let addItemBtn = document.getElementById("add-item");
const searchBtn = document.getElementById("searchBtn");
let listElement = document.getElementById("task-list"); //this is the DOM-s Ul  
const pageType = document.body.dataset.page;
console.log(pageType);







let listItems = [];
let userItems = [];



//XMLhttpsRequest 
const http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/todos");
http.onload = function () {
    if (http.status === 200) {
        const data = JSON.parse(http.responseText);
        data.forEach(addTasksToListItems)


        listItems.forEach(createtask)
       
    } else {
        console.log(http.status);
    }
};

http.onerror = function () {
    console.log(`its bad ${http.status}`);
};
http.send();

function addTasksToListItems(task) {
    switch (pageType) {

        case "all":
            listItems.push(task)
            break

        case "completed":
            if (filtertasks(task)) {
                listItems.push(task)

            } break
        case "In progress":
            if (!filtertasks(task)) {
                listItems.push(task)
            }
            break

    }
}

//this creates a task and apends it to DOM 
//chesk the item list 
function createtask(task) {
    
    let li = document.createElement("li");
    let title = document.createElement("p");
    let Container = document.createElement("div");
    let completedDiv = document.createElement("div");
    let idDiv = document.createElement("div");

    // text content
    title.textContent = task.title;
    completedDiv.textContent = `${completedOrNot(task)}`;
    idDiv.textContent = `ID: ${task.id}`;

    //  styles
    if (filtertasks(task)) {
        li.className = "bg-green-100 border-[2px] border-green-300 rounded-md p-4 mb-3 w-full max-w-xs text-gray-800 transition duration-300 hover:shadow-[0_0_10px_#4ade80] hover:brightness-105";
    } else {
        li.className = "bg-yellow-100 border-[2px] border-yellow-300 rounded-md p-4 mb-3 w-full max-w-xs text-gray-800 transition duration-300 hover:shadow-[0_0_10px_#facc15] hover:brightness-105";

    }

    title.className = " josefin-sans text-gray-set text-[20px] font-semibold mb-2";
    Container.className = "flex justify-between text-sm";

    completedDiv.className = task.completed ? "text-green-500 font-semibold" : "text-red-600 font-semibold";

    idDiv.className = "text-yellow-700 font-semibold";

    // tasks dom structure 
    Container.appendChild(completedDiv);
    Container.appendChild(idDiv);
    li.appendChild(title);
    li.appendChild(Container);


    listElement.appendChild(li); //apend it to DOM-s ul
}

function completedOrNot(task) {
    if (task.completed) {
        return `completed`
    } else {
        return `In progress...`
    }
}

function filtertasks(task) {
    return task.completed ? true : false
}


function getTaskById(num){
    return listItems[num-1]
}

function renderTask(task) {
    listElement.innerHTML = ""; // Clear previous output
    listElement.className="h-screen flex justify-center items-center "
    if (!task) {
        const errorMsg = document.createElement("p");
        errorMsg.textContent = "Task not found.";
        errorMsg.className = "text-red-600 font-medium";
        listElement.appendChild(errorMsg);
        return;
    }

    // Create elements
    const li = document.createElement("li");
    const title = document.createElement("p");
    const container = document.createElement("div");
    const completedDiv = document.createElement("div");
    const idDiv = document.createElement("div");

    // Text content
    title.textContent = task.title;
    completedDiv.textContent = `${completedOrNot(task)}`;
    idDiv.textContent = `ID: ${task.id}`;

    // Styles
    li.className = filtertasks(task) ? "bg-green-100 border-[2px] border-green-300 rounded-md p-4 mb-3 w-full max-w-xs text-gray-800 transition duration-300 hover:shadow-[0_0_10px_#4ade80] hover:brightness-105" : "bg-yellow-100 border-[2px] border-yellow-300 rounded-md p-4 mb-3 w-full max-w-xs text-gray-800 transition duration-300 hover:shadow-[0_0_10px_#facc15] hover:brightness-105";

    title.className = "josefin-sans text-gray-set text-[20px] font-semibold mb-2";
    container.className = "flex justify-between text-sm";
    completedDiv.className = task.completed ? "text-green-500 font-semibold" : "text-red-600 font-semibold";
    idDiv.className = "text-yellow-700 font-semibold";

    // Build structure
    container.appendChild(completedDiv);
    container.appendChild(idDiv);
    li.appendChild(title);
    li.appendChild(container);

    // Clear and append to taskDisplay (acting like a <ul>)
    listElement.appendChild(li);
}

searchBtn.addEventListener("click",()=>{
    const taskid = parseInt(idInput.value);
    const foundTask= getTaskById(taskid);
    renderTask(foundTask);
    idInput.value=""

})