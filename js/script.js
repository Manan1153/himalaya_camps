let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if (e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

//var inputField = document.getElementById("input-field");

//inputField.onkeyup = function (event) {
  //  var input = inputField.value;
   // if (event.keyCode == 13 && input === "") {
   //     inputField.classList.add("bounce");
   //     setTimeout(function () {
   //         //remove the class so animation can occur as many times as user triggers event, delay must be longer than the animation duration and any delay.
    //        inputField.classList.remove("bounce");
    //    }, 1000);
    //}
//}
///////////////////////////////////////////////////////////////////////////

// const submitButton = document.querySelector("#submit-button");
// const form = document.querySelector("form");
// const loading = document.querySelector(".loading");

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   form.style.display = "none";
//   loading.style.display = "flex";

//   setTimeout(function () {
//     form.style.display = "flex";
//     loading.style.display = "none";
//   }, 1000);
// });


