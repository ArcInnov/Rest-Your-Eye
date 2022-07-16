const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",() => {    
    
    var interval = document.getElementById("interval").value;
    var duration = document.getElementById("duration").value;
    
    var intervalNum = parseInt(interval);
    var durationNum = parseInt(duration);
    
    var inter= intervalNum*60*1000;
    var dur=durationNum*1000;
    
    let colorval='';
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
   /*  Redundant Code
    if (colorval=='green'){
      let color='#00FF00';
      chrome.storage.sync.set({ color });
    }
    if (colorval=='red'){
     let color='#FF0000.';
     chrome.storage.sync.set({ color });
    }
    if (colorval=='yellow'){
      let color='#FFFF00';
      chrome.storage.sync.set({ color });
    }
    */

   var getInput = colorval; // 
   localStorage.setItem("storageName",getInput); //code to store value of color 

   var getInputa = inter; // 
   localStorage.setItem("storageInterval",getInputa);
   
   var getInputb = inter; // 
   localStorage.setItem("storageDuration",getInputb);




    // Need to open the HTML page first, of which we are trying to get some element by ID.
    // TODO Save user selected color in chrome storage then open full screen html file 
    // SEE: https://developer.chrome.com/docs/extensions/mv3/getstarted/
    //document.getElementById('page').style.backgroundColor = rate_value;



  // code for opening black background html page--  window.open("fscreen.html")



})