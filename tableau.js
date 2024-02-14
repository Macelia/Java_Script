
const Myarray = ['banane', 'pomme','cerise','poire', 4];  
console.log(Myarray);
console.log(Myarray.join("/"));

const Cars = new Array("hoodi", 'mercedes','hndai','kia', 4);  
console.log(Cars);
console.log("la longueur du prmier tableau est "+Myarray.length);
console.log(Myarray.toString()+"mon tableau sous forme de chaine de caractère")

let voiture =Cars.pop();   
console.log(voiture);

let fruit = Myarray.push("raisin");
console.log(fruit);
console.log(Myarray);

console.log(Myarray[0]);
Myarray[0]="fruit de dragon"
console.log(Myarray);

const boys = ["walid","madjid","jack"];
const girls = ["Macelia","Sara","Samia"];
const MyChildren = girls.concat(boys);

console.log(MyChildren);

const MyArray1 = ['Js','Python','Cpp','C#','react','Node.js','java'];

console.log( MyArray1);
MyArray1.splice(2,0,'TypeScript','C');
console.log(MyArray1);
MyArray1.splice(3,1,'TypeScript','php');
console.log(MyArray1);


const parfum = ["dior","channel","franc olivier","coco channel"];
console.log(parfum);
const sliceParfum=parfum.slice(2);
console.log(sliceParfum);
p=parfum.slice(1,3);
console.log(p);
console.log(parfum);



