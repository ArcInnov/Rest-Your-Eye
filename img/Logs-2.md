# 17 July 2022

Encountered error Document is not defined
Using iframe and window.parent.document is too complex and by looking at solutions dates I guess its outdated too

Lets try using a if condition- it makes the code to messy
Paused work on this

Working on closing a window using javascript
window.open('','_parent','');  // loads a blank
window.close(); // closes the current window

Declaration or statement expected.ts(1128)
Will have to rewrite lot of code
I guess solved it there is missing bracket after starting third if statement

setTimeout(display,5000);
function display(){
    alert("Trying timeout");
}
Tried the time out function it works as expected

setTimeout(display,5000);
function display(){
    window.open('','_parent',''); 
    window.close();
}
Tried the time out function for closing window it works as expected
Replaced 5000 with timer variable that has value recieved from duration (entered by user)