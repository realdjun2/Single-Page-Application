document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL path
    var path = window.location.pathname;

    // Find the corresponding link and add the "active" class
    document.querySelectorAll('nav a').forEach(function (link) {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});
