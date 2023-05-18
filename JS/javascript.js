var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}

/*Carusel*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//finish carusel

//contact form validation
function validateName() {
  var name = document.getElementById('fname').value;
  if(name.length == 0) {
    producePrompt('Numele invalid', 'name-error', 'red')
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('Numele si prenumele complet.','name-error', 'red');
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;
}

function validateEmail () {

    var email = document.getElementById('email').value;

    if(email.length == 0) {

      producePrompt('Email invalid','email-error', 'red');
      return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

      producePrompt('Email invalid', 'email-error', 'red');
      return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}

function validateSubject() {
  var message = document.getElementById('subject').value;
  var required = 1;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' sau mai multe caractere','subject-error','red');
    return false;
  }

  producePrompt('Valid', 'subject-error', 'green');
  return true;

}

function validateMessage() {
  var message = document.getElementById('message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' de caractere mai sunt necesare pentru a fi valid','message-error','red');
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;

}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Remediați problemele.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
    return false;
  }
  else {

  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;

}
//finish contact form validation


