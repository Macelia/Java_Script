// ECMASCRIPT
// let reaffectation possible contrairement de const lisible uniquement dans le bloc

function exempleVar(){
    var x=15;

    if(true){
        var x=10;
        console.log("la valeur de x est ",x);

    }  
    console.log(x);
    
}

exempleVar();

console.log("Ci-dessous l'affichage avec  Let ");

function exempleLet(){
    let y=15;

    if(true){
        let y=10;
        console.log("la valeur de y dans le bloc est ",y,".\n");

    }  
    console.log("la valeur de y en dehors le bloc est ",y,".\n");
    
}

exempleLet();

function exempleConst(){
    const z=5;
    // z=10;  la constante ne peut pas etre reaffectée

    // if(true){
    //     const z=10;
    //     console.log("la valeur de z dans le bloc est ",z,".\n");

    // }  
    console.log("la valeur de z en dehors le bloc est ",z,".\n");
    
}

exempleConst();

