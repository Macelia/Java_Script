
const title = document.getElementsByClassName("title");
console.log("le titre est ",title);


 
const demo = document.getElementById("demo");
 function Salut() {

    console.log("sallll");


 
        // if(demo.innerHTML === "Hey World")  {
        //     demo.innerHTML = "BuENOS DIAS";
        // } 
        // else{
        //     demo.innerHTML = "Hey World"
        // }
   
        demo.innerHTML === "Hey World" ? demo.innerHTML ="BuENOS DIAS":demo.innerHTML ="Hey World";

 }

demo.onclick = Salut;

// innerHTML modifier le contenu inner
console.log(demo,"mydem");


document.getElementById("demo").style.color= "red";


 const mydiv= document.getElementById("my_DIV").innerHTML = "<h4></h4>"

// const e= document.getElementsByClassName("panier");

// const tagName = document.getElementsByTagName("header").innerHTML="<div></div>";
// console.log( tagName);

console.log(Array.isArray(title));      

console.log(Array.from(title)); // pour la conversion en un tableau

console.log(Array.isArray(Array.from(title)));

const MySelector = document.querySelector("#liste_livre li .name");  

console.log(MySelector);

const BoucleList = document.querySelectorAll("#liste_livre li .name");  
console.log(BoucleList);

