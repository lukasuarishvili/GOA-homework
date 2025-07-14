/* 
2: Prompt-ის გამოყენება და Switch-Case
შექმენი პროგრამა, რომელიც მომხმარებელს ეკითხება მის საყვარელ თვეზე (მხოლოდ 5 ვარიანტი).

გამოიყენე switch-case, რათა თითოეულ თვეს მიაკუთვნო შესაბამისი სესონური დასახელება (მაგ. ზაფხული, ზამთარი, გაზაფხული და ა.შ.).
*/
const user_Input = +prompt("chose one from  the first fice months")

switch (user_Input) {
    case 1:
        alert("januari") ; 
    case 2:
        alert("febuari") ;
    case 3:
        alert("march") ;

    case 4:
        alert("april");

    case 5:
        alert("may")
}

