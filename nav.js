// this is how I add a comment to my script
alert('Hello World!');

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function openMenu() {

    var x = document.getElementById("portfolioTopnav");

    if (x.className === "topnav") {

      x.className += " responsive";

    } else {

      x.className = "topnav";

    }

}