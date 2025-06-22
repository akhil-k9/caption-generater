const captions = [
    "A picture is worth a thousand words.",
    "Chasing dreams and making memories.",
    "Live in the moment.",
    "The best time for new beginnings is now.",
    "Smile, it's a beautiful day!",
    "Take only pictures, leave only footprints.",
    "Be your own kind of beautiful.",
    "Life is better when you're laughing.",
    "Adventure awaits, let's go!",
    "Life is short, make it sweet."
];

function generateCaption() {
    const randomIndex = Math.floor(Math.random() * captions.length);
    const captionMessage = captions[randomIndex];
    document.getElementById("caption").textContent = captionMessage;
}
