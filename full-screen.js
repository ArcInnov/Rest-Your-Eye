let changeColor = document.getElementById("page");

color=localStorage.getItem("storageName");

if (color==''){
    changeColor.style.backgroundColor = 'black';
}
else {
changeColor.style.backgroundColor = color;
}

function closeOpenedWindow() {
    openedWindow.close();
  }

