const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",() => {    
    
    var interval = document.getElementById("interval").value;
    var duration = document.getElementById("duration").value;
    var intervalNum = parseInt(interval);
    var durationNum = parseInt(duration);
    var inter= intervalNum*60*1000;
    if (document.getElementById('colorr').checked==1) {
      rate_value = document.getElementById('colorr').value;
    }
    if (document.getElementById('colory').checked==1) {
      rate_value = document.getElementById('colory').value;
    }
    if (document.getElementById('colorg').checked==1) {
      rate_value = document.getElementById('colorg').value;
    
    }
    // Need to open the HTML page first, of which we are trying to get some element by ID.
    // TODO Save user selected color in chrome storage then open full screen html file 
    // SEE: https://developer.chrome.com/docs/extensions/mv3/getstarted/
    window.open("fscreen.html");
    
    //document.getElementById('page').style.backgroundColor = rate_value;
    

    
   /* function rye {
        window.open("fscreen.html");
        function ryec{
            
        }
    }
    
*/

  // code for opening black background html page--  window.open("fscreen.html")



})