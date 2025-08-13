//task-1
// შექმენით სამი Promise:
//
//  ▪getProduct – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 1 წამში,
//  ▪getUser – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 2 წამში,
//  ▪getPayment – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 3 წამში.
//     გამოიყენეთ Promise.all, რათა მიიღოთ ყველა მონაცემი ერთად.
//     თუ რომელიმე ჩაიჭრება(გააკეთეთ ისე, რომ პრომისებმა რანდომულად ან დარეჯექდნენ ან დარეზოლვდნენ),
// მთლიანი ოპერაცია უნდა გადავიდეს catch‑ში და გამოიტანოს "შეკვეთის დამუშავება ჩაიშალა".

const getProduct = new Promise((resolve, reject) => {
    setTimeout(resolve,1000, "this returns product");
})

const getUser = new Promise((resolve, reject) => {
    setTimeout(resolve,2000, "this returns user")
})

const getPayment = new Promise((resolve, reject) => {
    setTimeout(resolve,3000, "this returns Payment");
})

Promise.all([getProduct, getUser, getPayment])
    .then((info)=> {console.log(info)})

