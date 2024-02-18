const BasedUrl = "https://jsonplaceholder.typicode.com";
console.log(BasedUrl);
// fetch avec promesses

// const GetUsers = () => {
//   fetch(`${BasedUrl}/users`)
//     .then( (Respense) => {
//        return Respense.json()
//     })
//     .then( (Data) => {
//         console.log(Data);

//     })
//     .catch((Error)=>{
//         console.log(Error);
//     }

//     )
// }
// GetUsers();
// fetch avec asyn await

 //////////////////////////////////////////////Meme exemple mais avec le Async await


 const GetUsers = async() =>{ 

    try{
       const Respense =     await fetch(`${BasedUrl}/users`)
       const Data = await Respense.json();
       console.log(Data);
   }
    catch(Error){console.log(Error)};

 
}

 GetUsers();


 //
//  fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


