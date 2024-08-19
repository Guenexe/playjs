let name ="Jhon";
let age = 25;
let hasHobby = true;
let hobbies =["Reading" ,"Coding ","Gaming"];
const fullname = "Jhon Doe";

const person={
    name:"Jhon ",//key:pair= value
    age : 25,
    greet: function(){
        console,log(" hello, I am " + this.name);
    },
};

console.log(person.name);
function summarizedUser(username, userAge, userHasHobby){
    return (
        "Name is "+ username +",age is "+ userAge+" and user has hobbies "+ userHasHobby
    );
}

if (age> 18){
    console.log("You are an adult ");
}else if(age > 60){
    console.log("You are an senior");
}else{
    console.log("You are an minor! ");
}

7
console.log(name);
console.log(hobbies);
console.log(summarizedUser(name,age,hasHobby));
console.log(summarizedUser("jane",30,true));
