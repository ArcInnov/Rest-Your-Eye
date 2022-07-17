let changeColor = document.getElementById("page");

color=localStorage.getItem("storageName");
timer=localStorage.getItem("storageDuration");

if (color==''){
    changeColor.style.backgroundColor = 'black';
}
else {
changeColor.style.backgroundColor = color;
}

setTimeout(display,timer);
function display(){
    window.open('','_parent',''); 
    window.close();
}

//window.open('','_parent',''); 
//window.close();

