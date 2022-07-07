# 7 July 2022

The goal is to make an extension when enabled takes time input from users and then on regular intervals pops a warning and blacks the screen out

Step 1 - Make the basic exension that can be used without any functionality

Started creating my own icon for extesnion
Used an online icon maker downloaded the file in png
Now using Adobe to resize it in sizes that google recommends for an icon 16*16 32*32 48*48 128*128
Lets just make one png 128*128 making it is time consuming

Icon loading issue
Was unable to load icons as png was not in the path specified that is "128":"img/128.png" finally put it in the img folder and was able to load the icon

using form tag to get user inputs
I dont know if I will really need the name element in form tag and I am not clear about its use

ERR_FILE_NOT_FOUND
Named file html.popup instead of popup.html

Can see the popup.html it needs styling but lets add that later

Will continue from getting form data from html to JS

Key board shortcut to switch between two windows
When using Visual Studio Code on Windows, you can use CTRL + PAGE_UP to switch to the previous tab, and CTRL + PAGE_DN to switch to the next tab. You also have the ability to switch to tabs based on their (non-zero relative) index. You can do so, by pressing and holding ALT , followed by a number (1 through 9).

ctrl + shift + w --- closes the window

I would have preferred to use window using win32api but again the node.js code problem comes up
But nevertheless an html page is not bad

var inteval is getting value from html form 
"${interval}`" this syntax is used to get value of number variable in string format

Coding effcieny is pretty low because you keep losing track so lets think on paper to avoid doing just that

Your alert box is having problems displaying number so lets try to use console.log to check if the vaiable are getting right values
Simple alert() works it is treating the data retrieved as string

Now we need to think about the loginc
We need the program to get the current time then keep adding interval 
    first we need to get current time 
    Then we need to add interval in minutes to
    We must use a infinite or a loop thats value turns false when stop button is clicked
    for now lets stick to a infinit loop

FOr this program you dont need to get time if you use ser interval method

why do i get an error when i try to execute more than one line of code in my chrome extensions
because you were leaving unnecessar indentation