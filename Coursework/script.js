document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('.navlink');

    links.forEach(function (link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
        else {
            link.classList.add('inactive')
        }
    });
});