// JavaScript Document

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Cars moving

var buttons = document.querySelectorAll(".buttons button");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    e.preventDefault();

    var slide = document.querySelector(".cars .main").setAttribute('src', 'anim-assets/cars-' + e.target.dataset.color + '.png');
  });
}

// load page 2 in 1 

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {        	
        	document.body.innerHTML += xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();    
}

var asd = httpGet('page/page-2.html');

