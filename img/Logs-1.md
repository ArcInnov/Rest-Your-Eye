# 16 July 2022

It would be great if I had documented stuff more carefully everything is balnk to me at the moment

I have put the interval functionalinity in background.js as the page needs to open multiple times
When I tried working out the code it did not work probably because I have not referenced background,js file in manfiest.json 
Resolved by adding background.js as follows in line 13-15 of manifest.json

Encountered error startbtn not defined
Solved using const startBtn = document.getElementById("startBtn");

Encountered error Document is not defined
I know the cause of the error the cause is that the code does notw which document to get
Looking for solution in getting started of chrome extensions