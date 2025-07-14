const user_anser = +prompt("age:", "");

function Checkage(age) {
    return age >= 18 ? true : false;

}


if (Checkage(user_anser)) {
    alert("you're old enough ");
} else {
    alert(`to young `)
}
