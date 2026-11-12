document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector("main");

    if (main) {
        const button = document.createElement("button");
        button.textContent = "Click Me";

        button.addEventListener("click", function() {
            alert("Welcome to my website!");
        });

        main.appendChild(button);
    }
});
