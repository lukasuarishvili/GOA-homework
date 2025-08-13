// Level 133:  
// შექმენით პირველი პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 15–მდე.
//  ▪აგზავნის მოთხოვნას: 
// https://jsonplaceholder.typicode.com/users/${num}

//  ▪თუ ასეთი მომხმარებელი მოიძებნა (response.ok == true) → resolve მომხმარებლის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.
// შექმენით მეორე პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 150–მდე.
//  ▪აგზავნის მოთხოვნას: 
// https://jsonplaceholder.typicode.com/posts/${num}

//  ▪თუ ასეთი პოსტი მოიძებნა (response.ok == true) → resolve პოსტის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.
// გამოიყენეთ Promise.all, რომ ორივე პრომისი პარალელურად გაეშვას.
// Promise.all მეთოდზე  გამოიყენეთ then და catch მეთოდები, 
// then დაბეჭდავს ორივე მიღებულ ინფოს (მომხმარებელი და პოსტი).
// catch reject ის შემთხვევაში დააკონსოლოგებს, რომ მონაცემები ვერ მოიძებნა 

function randomUserId() {
    return Math.floor(Math.random() * 15) + 1;
}
function randomPostId() {
    return Math.floor(Math.random() * 150) + 1;
}

const prom1 = new Promise((resolve, reject) => {
    const num = randomUserId();
    fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
        .then(response => {
            if (!response.ok) {
                reject("შეცდომა");
            } else {
                return response.json();
            }
        })
        .then(userinfo => {
            resolve(userinfo)
        })
        .catch(error => {
            reject(error);
        });

});

const prom2 = new Promise((resolve, reject) => {
    const num = randomPostId();

    fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)

        .then(response => {
            if (!response.ok) {
                reject("შეცდომა:");
            } else {
                return response.json();
            }
        })
        .then(postInfo => {
            resolve(postInfo);
        })
        .catch(error => {
            reject(error);
        });
});


// prom1
//     .then(user => {
//         console.log("User Info:", user);
//     })
//     .catch(error => {
//         console.log(`ERROR:${error}`)
//     })
//
// prom2
//     .then(info => {
//         console.log("Post Info:", info);
//     })
//     .catch(error => {
//         console.log("ERROR:", error);
//     });
//

Promise.all([prom1, prom2])
    .then((info) => {console.log(info)})
    .catch( (error)=>{console.log(`ERROR ${error}`)})
