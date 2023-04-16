class Student {
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
    }
}

const student1 = new Student(10,"apu bissas");
const student2 = new Student(22,"mahiya mahi");
const student3 = new Student(22,"shakib khan");

console.log(student1.name,student2.name,student3.name);