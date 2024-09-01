
window.addEventListener("scroll", function() {
    var header = document.querySelector(".site-header");
    var topBarHeight = document.querySelector(".top-bar").offsetHeight;

    if (window.scrollY > topBarHeight) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.zIndex = "1000";
    } else {
        header.style.position = "relative";
        header.style.zIndex = "999";
    }
});
