const skins = [
    "basic.css",
    "dark.css",
    "modern.css"
];

let currentSkin = 0;

document.getElementById("skinBtn").addEventListener("click", () => {
    currentSkin = (currentSkin + 1) % skins.length;
    document.getElementById("skinStylesheet").href = skins[currentSkin];
    console.log("Skin changed to: " + skins[currentSkin]);
});
