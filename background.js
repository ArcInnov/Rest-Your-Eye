const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",() => {
  
  intera=localStorage.getItem("storageInterval");
  dura=localStorage.getItem("storageDuration");

  var openedWindow;

  function openWindow() {
    openedWindow = window.open('fscreen.html');
  }
  openWindow();
setInterval(openWindow,intera);



})S