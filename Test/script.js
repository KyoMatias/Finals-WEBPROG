document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const animateButton = document.getElementById("animateButton");

    animateButton.addEventListener("click", function() {
        form.classList.add("animated");

        // Remove the animation class after the animation is complete
        form.addEventListener("animationend", function() {
            form.classList.remove("animated");
        }, { once: true });
    });
});
