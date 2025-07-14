/* 
1) შექმენით 5 ელემენიტანი მასივი და  splice გაუკეთეთ 1, დან 3 ელემენტამდე ასევე slice ში შეინახეთ 2 დან 3 ელემენტ4ები
1. ამმოჭრილ slice-ს ში შენახული ელემენტბში ჩაამტეთ splcie ით 2 ელემენტი
*/


let array = ["data", "luka", "gio", "arzen", "nika"]

console.log(array)

array.splice(0,2)

let newarray =array.slice(2,3)

console.log(newarray)

newarray.splice(3, 0, "tutashxia", "kukaracha")

console.log(newarray)

let info = {
    name: "john",
    surname:"doe",
    age:"26",
}

info.height= "6.0"
info.race="white"
console.log(info)