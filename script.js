//TODO hacer el onclick - hacer toggle the class - vanilla javascript, no jquery. Mirar si se puede añadir una transition en css yo creo, de opacidad al menos

const thumbnails = document.getElementsByTagName("img");

const assignListeners = () => {
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
      let fullScreenIllustration = this.nextElementSibling;
      if(fullScreenIllustration.classList.contains("hidden-illustration")) {
        fullScreenIllustration.classList.remove("hidden-illustration");
        fullScreenIllustration.classList.add("full-screen-illustration");
        fullScreenIllustration.addEventListener("click", function() {
          if(fullScreenIllustration.classList.contains("full-screen-illustration")) {
            fullScreenIllustration.classList.remove("full-screen-illustration")
            fullScreenIllustration.classList.add("hidden-illustration")
          }
        })
      }
    });
  }
};

assignListeners();
