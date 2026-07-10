alert("Welcome to My Portfolio!");

const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
    heading.style.color = "#ff5722";
    setTimeout(() => {
        heading.style.color = "#0d6efd";
    }, 500);
});

const cards = document.querySelectorAll("li");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

    card.addEventListener("click", () => {
        alert("You selected: " + card.innerText);
    });
});

console.log("Portfolio Loaded Successfully!");