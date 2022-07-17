const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",() => { 
var interval = document.getElementById("interval").value;
var duration = document.getElementById("duration").value;
  
var intervalNum = parseInt(interval);
var durationNum = parseInt(duration);
  
var inter= intervalNum*60*1000;
var dur=durationNum*1000;

  let colorval = '';
  if (document.getElementById('colorr').checked==1) {
    rate_value = document.getElementById('colorr').value;
    colorval = rate_value;
  }
  if (document.getElementById('colory').checked==1) {
     rate_value = document.getElementById('colory').value;
     colorval = rate_value;
  }
  if (document.getElementById('colorg').checked==1) {
    rate_value = document.getElementById('colorg').value;
    colorval = rate_value;
  }
var getInput = colorval; // 
localStorage.setItem("storageName",getInput); //code to store value of color 

var getInputa = inter; // 
localStorage.setItem("storageInterval",getInputa);
 
var getInputb = dur; // 
localStorage.setItem("storageDuration",getInputb);

  window.open("fscreen.html");



});  // code for opening black background html page--  window.open("fscreen.html")

