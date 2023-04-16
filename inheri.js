class parent{
   constructor(){
    this.fatherName = "sarowar";
   }
}
class Child extends parent{
   
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("arnold");
const baby2 = new Child("riyad");


console.log(baby.fullName());