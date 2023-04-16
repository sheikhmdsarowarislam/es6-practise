const age = [10,20,25,21,21,23,11];
const age2 = [09,78,52,12,36,45,10,33];
const age3 = [10,12,13,14,15,16]
const allAges = age.concat(age2).concat([700]).concat(age3);
const allAges2 = [...age,...age2,...age3,5000,1000];
console.log(allAges2)
console.log(allAges);


const ami = 650;
const tomi = 550;
const she = 450;
const boroluk = [850,420,632];
const max = Math.max(...boroluk);
console.log(max);