function hover() {
    if(this.className == "hide") {
        this.className = "halfShow"
    }
}
function unhover() {
    if(this.className == "halfShow") {
        this.className = "hide"
    }
}
function linkHover() {
    if(this.previousElementSibling.className == "hide") {
        this.previousElementSibling.className = "halfShow"
    }
}
function linkUnhover() {
    if(this.previousElementSibling.className == "halfShow") {
        this.previousElementSibling.className = "hide"
    }
}
function show() {
    if (this.className == "halfShow") {
    colourTracker = colourTracker * (-1)
    }
    this.className = "show";
    if (colourTracker == 1) {
        Array.from(hiddenStones).forEach(stone => {
            stone.src = "white_stone.png"
        })
    } else {
        Array.from(hiddenStones).forEach(stone => {
            stone.src = "black_stone.png"
        })
    }
}
var colourTracker = -1
const stones = document.getElementsByTagName("img")
const hiddenStones = document.getElementsByClassName("hide")
const links = document.getElementsByTagName("h3")
const startStone = document.getElementById("start_stone")
if (colourTracker == 1) {
    startStone.src = "white_stone.png"
} else {
    startStone.src = "black_stone.png"
}

Array.from(stones).forEach(stone => {
    stone.addEventListener("mouseenter", hover);
    stone.addEventListener("mouseleave", unhover);
})
Array.from(links).forEach(link => {
    link.addEventListener("mouseenter", linkHover);
    link.addEventListener("mouseleave", linkUnhover)
})
Array.from(hiddenStones).forEach(stone => {
    stone.addEventListener("click", show)

})

async function init() {
    //  Request the needed libraries.
    await google.maps.importLibrary('maps');

    const mapElement = document.querySelector('iframe');

    const innerMap = mapElement.innerMap;

    innerMap.setOptions({
        // Disable the default UI.
        disableDefaultUI: true,
    });
}

void init();