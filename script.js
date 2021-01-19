
function openNav() {
  document.getElementById("mySidepanel").style.width = "150px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

let url1 ='https://foodish-api.herokuapp.com/api/images/biryani'
let response1;
function getBiryani(){
  fetch(url1)
  .then (response1 =>response1.json())
  .then(json => {
      document.querySelector('.foodImage').src = json.image;
});
}
getBiryani();

let url2 ='https://foodish-api.herokuapp.com/api/images/burger'
let response2;
function getBurger(){
  fetch(url2)
  .then (response2 =>response2.json())
  .then(json => {
      document.querySelector('.foodImage').src = json.image;
});
}
getBurger();

let url3 ='https://foodish-api.herokuapp.com/api/images/dosa'
let response3;
function getDosa(){
  fetch(url3)
  .then (response3 =>response3.json())
  .then(json => {
      document.querySelector('.foodImage').src = json.image;
});
}
getDosa();

let url4 ='https://foodish-api.herokuapp.com/api/images/idly'
let response4;
function getIdly(){
  fetch(url4)
  .then (response4 =>response4.json())
  .then(json => {
      document.querySelector('.foodImage').src = json.image;
});
}
getIdly();

let url5 ='https://foodish-api.herokuapp.com/api/images/pizza'
let response5;
function getPizza(){
  fetch(url5)
  .then (response5 =>response5.json())
  .then(json => {
      document.querySelector('.foodImage').src = json.image;
});
}
getPizza();




