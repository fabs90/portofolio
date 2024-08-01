function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

<<<<<<< HEAD
=======
document.getElementById('currentYear').textContent = new Date().getFullYear();

>>>>>>> fb231d7 (Test 2nd)
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// THE CODE BELOW IS FOR IMAGE MAGNIFY
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
<<<<<<< HEAD
  modalImg.src = "assets/projects-1-full.png";
=======
  modalImg.src = "assets/project-admin-full.png";
>>>>>>> fb231d7 (Test 2nd)
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
<<<<<<< HEAD
  modalImg.src = "assets/projects-2-full.png";
=======
  modalImg.src = "assets/project-landing-full.png";
>>>>>>> fb231d7 (Test 2nd)
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
<<<<<<< HEAD
  modalImg.src = "assets/projects-3-full.png";
=======
  modalImg.src = "assets/project-uiux-full.png";
>>>>>>> fb231d7 (Test 2nd)
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
<<<<<<< HEAD
  modalImg.src = "assets/projects-4-full.png";
=======
  modalImg.src = "assets/project-web-full.png";
>>>>>>> fb231d7 (Test 2nd)
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
<<<<<<< HEAD
  modalImg.src = "assets/projects-5-full.jpeg";
=======
  modalImg.src = "assets/project-android-full.png";
>>>>>>> fb231d7 (Test 2nd)
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};
<<<<<<< HEAD
=======
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "assets/certificate-bangkit.jpg";
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "assets/certificate-laravel.jpg";
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

>>>>>>> fb231d7 (Test 2nd)
