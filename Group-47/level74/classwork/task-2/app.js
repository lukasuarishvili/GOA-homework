
for (let i = 0; i < 30; i++) {
        console.log(i)
      }

function myfunc() {
  let bg = document.getElementById("button");
  let boxes = document.querySelectorAll(".box");

  // Change button color
  bg.style.backgroundColor = "blue";

  // Change each box's background color
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "blue";
  }
}
