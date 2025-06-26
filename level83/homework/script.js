/* Initialize empty list called todoList
Get reference to input box, add button, reset button, and display area

When reset button is clicked:
    - Prevent page reload
    - Clear the display area
    - Clear the todoList array

When add button is clicked:
    - Prevent page reload
    - Get the text from input
    - Clear the input box
    - Add the text to the todoList array
    - Clear the display area
    - For each item in todoList:
        - Create a new div
        - Set the text of div to the item
        - Add the div to the display area

*/

// Main button 
const button = document.getElementById("Main_bt");
//inputs info
const info = document.getElementById("t1");
//
let box_container= document.getElementsByClassName("box-container")[0];

let toDOList = [];

button.addEventListener("click", add_element)

function add_element(e) {
    e.preventDefault();

    let text=info.value;

    info.value=""

    toDOList.push(text)

    box_container.append(text)
}


