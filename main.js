var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

function changeImage(e) {
  displayedImage.src = e.target.src;
}


for (var i=1; i<=5; i++) {
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/pic"+[i]+".jpg");
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", changeImage);
}


/* Wiring up the Darken/Lighten button */
function darkenLighten(e) {
  if(e.target.getAttribute("class") === "dark") {
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    e.target.textContent = "Lighten";
    e.target.setAttribute("class", "light")
  } else if (e.target.getAttribute("class") === "light") {
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    e.target.textContent = "Darken";
    e.target.setAttribute("class", "dark");
  }
}


btn.addEventListener("click", darkenLighten);




// var newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// thumbBar.appendChild(newImage);
