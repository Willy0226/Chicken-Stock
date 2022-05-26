
const scrollUp = document.querySelector(".scroll-button");

window.addEventListener("scroll", () => {
    // if page has been scrolled more than 80px from the top
    if (window.pageYOffset > 80) 
    {
        scrollUp.classList.add("active");
    } 
    else 
    {
        scrollUp.classList.remove("active");
    }
})