/*
   Project Part 2
   
   Author: Rachel Liska
   Date: 12/10/2023
   Filename: contact.html


   Filename: purchasing.js

   Purpose: 

*/
var clock = new Date();
console.log(clock);
document.getElementById("time").textContent = clock;
/* Current Day */
    function updateClock() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
	  const formattedString = dateString.replace(", ", " - ");
	  timeDisplay.textContent = formattedString;
	}
	
    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial update
    updateClock();
	
   /* Hide and Display Order Option */
window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
   document.getElementById("delivery").onclick = turnOnDelivery;
   document.getElementById("pickup").onclick=turnOnPickup;
}

function turnOnDelivery() {
   document.getElementById("addressBox").disabled=false;
   document.getElementById("delBox").disabled=false;
   document.getElementById("delTip").disabled=false;
   document.getElementById("pickupBox").disabled=true;
}

function turnOnPickup() {
   document.getElementById("addressBox").disabled=true;
   document.getElementById("delBox").disabled=true;
   document.getElementById("delTip").disabled=true;
   document.getElementById("pickupBox").disabled=false;
}
