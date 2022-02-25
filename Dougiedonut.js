//grab the brooklyn button and set it to a variable
let brooklyn=document.getElementById("brooklyn");

brooklyn.addEventListener("click", () => {
    let complaints=document.getElementById("complaints").value 
    complaints = Number(complaints) || 10
const url ="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
    console.log("its working");

    const data1=document.getElementById("data")
    for (let i=0;i <complaints;i++){
        data1.innterHTML+="<li>"+JSON.stringify(filtereddata[i])+"</li>"}})
        .catch((error)=>{
            console.log(error)
        }
)})
const manhattan = document.getElementById('manhattan');

manhattan.addEventListener("click", ()=> {

let complaints = document.getElementById("complaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
.catch((error) => {
console.log(error)
}
)})

const queens = document.getElementById('queens');

queens.addEventListener("click", ()=> {

let complaints = document.getElementById("complaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}



)})
const bronx = document.getElementById('bronx');

bronx.addEventListener("click", ()=> {

let complaints = document.getElementById("complaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}



)})
const statenisland = document.getElementById('statenisland');

statenisland.addEventListener("click", ()=> {

let complaints = document.getElementById("complaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}

)})