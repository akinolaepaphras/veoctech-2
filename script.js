const navLinks = document.querySelectorAll(".nav-item");

navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    // remove active class from all links
    navLinks.forEach(link => link.classList.remove("active"));
    // add active class to clicked link
    link.classList.add("active");
  });
});

$('.dropdown-toggle').dropdown();

$(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
});