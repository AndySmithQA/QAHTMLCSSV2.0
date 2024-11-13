window.addEventListener("scroll", function() {
    var header = document.querySelector(".sticky-header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust this value as needed
        header.style.backgroundColor = "#555"; // Change header background color when scrolling
        header.style.height = "100px";
        header.style.padding = "0px"
    } else {
        header.style.backgroundColor = "#333"; // Reset header background color
        header.style.height = "140px";
        header.style.padding = "20px"
    }
});
