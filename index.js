const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");

const btn = document.querySelector("#btn");

// fetch promise return krta h
let promise = fetch(URL);
console.log(promise);

// const getFacts = async () => {
//   // arrow fn asychronous function that returns a promise object
//   console.log("Getting Data...");
//   let response = await fetch(URL); // await ku k api time leti h upate hony k lie  or fetch url krty h taky idr response aye
//   console.log(response); // print  response  json format mn hota h 
//   let data = await response.json(); // ye line hmry response ko json mn convert kr deti  h jis sy hmra data  array ki form mn a jata h jo hm easily use kr skty h  
//   factpara.innerText = data[1].text; //  factpara.innerText  hmy o index py py jo text hoga wo dy ga
// };

//  2nd Method esy b kr skty h :
function getFacts() {
    fetch (URL).then( (response) => {
        return response.json();
    }).then( (data) => {
        console.log(data);
        factpara.innerText = data[1].text; 
    })
}
btn.addEventListener("click", getFacts);

// screen shot lia h  json ajax  request  k  data  fetch krta h  or  api  k  data  fetch krta h  or  json  k  data  fetch krta h  
