
const players = document.getElementById("players");

const stories = [
    "PLAYER 001 — A lifetime of memories, one final decision.",
    "PLAYER 067 — A dream worth fighting for.",
    "PLAYER 218 — Trust is the most dangerous game.",
    "PLAYER 199 — Behind every smile is a struggle.",
    "PLAYER 456 — Sometimes survival is not victory.",
    "PLAYER 101 — Everyone has something to lose."
];

// Create floating player numbers
for (let i = 1; i <= 30; i++) {
    let player = document.createElement("div");

    player.className = "player";
    player.innerText = String(i).padStart(3, "0");

    let angle = Math.random() * Math.PI * 2;
    let radius = 140 + Math.random() * 70;

    player.style.left =
        `calc(50% + ${Math.cos(angle) * radius}px)`;

    player.style.top =
        `calc(50% + ${Math.sin(angle) * radius}px)`;

    player.style.animationDelay = Math.random() * 3 + "s";

    players.appendChild(player);
}

// Reveal player story
let storyIndex = 0;

document.getElementById("reveal").addEventListener("click", function() {
    document.getElementById("storyText").innerText =
        stories[storyIndex];

    storyIndex++;

    if (storyIndex >= stories.length) {
        storyIndex = 0;
    }
});

// Enter the game
document.getElementById("explore").addEventListener("click", function() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});

// Mouse interaction
document.addEventListener("mousemove", function(event) {
    let x = (event.clientX / window.innerWidth - 0.5) * 15;
    let y = (event.clientY / window.innerHeight - 0.5) * 15;

    document.querySelector(".arena").style.transform =
        `translate(${x}px, ${y}px)`;
});
