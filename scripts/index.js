// set up a variable to create a button 

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// Add event listener sets up a function that will be called whenever the specified event is delivered to the target
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function toggleAboutMe() {
    const x = document.getElementsByClassName("about-container")[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

