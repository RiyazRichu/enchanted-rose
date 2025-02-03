document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll(".poem-line");
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = 1;
        }, index * 2000); // Delay each line by 2 seconds
    });
});
