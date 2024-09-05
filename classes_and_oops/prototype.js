// let myheroes = ["thor","spiderman"]
// let heropower= {
//     thor:"hammer",
//     spiderman:"sling",
//     getSpiderPower:function(){
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }
// // console.log(heropower.getSpiderPower());
// Object.prototype.sanjay= function(){
//     console.log(`this availabel in all function`);
// }
// Array.prototype.arr = function(){
//     console.log(`this is for array`);
// }
// heropower.sanjay();
// myheroes.arr();
// myheroes.sanjay();

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User
// console.log(Teacher.User())
Object.setPrototypeOf(TeachingSupport, Teacher)
 
let anotherUsername = "sanjay    "
String.prototype.truelen= function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUsername.truelen();
"sanjay kumar    ".truelen();