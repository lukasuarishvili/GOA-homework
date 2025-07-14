//ეს date- ობიექტი

const now = new Date();
console.log(now)

// ეს კლასსი
class person {

    //კონსტრუქტორი გადაეცემა არგუმენტები შექმნისას
    constructor(name, surname, age) {
        //ეს ინიციალიზაცია 
        this.name = name;
        this.surname = surname;
        this.age = age;
    }


    get shouts() {
        console.log(`კუკარაჩა მოკლეს`)
    }
    set says(word) {
        console.log(word)
    }
}
const humen1 = new person("data", "tutashxia", '26');

const humen2 = {
    name: "arzen",
    surname: "muskia",
    age: "26"
}

console.log(humen1, humen2)

humen1.says="ფიცხელ მიშველე ვიღუპები"

humen2.shouts
