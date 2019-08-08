const Images = ["chevaux.jpg", "clown.jpg", "contorsionniste.jpg", "danceurs.jpg", "elephants.jpg", "tigres.jpg"]
let randomIndex = Math.floor(Math.random() * Images.length);



function getNextImg() {
    let newIndex = Math.floor(Math.random() * Images.length)
    if (newIndex === randomIndex) {
        newIndex = getNextImg();
    }
    return newIndex;
}
const img = document.querySelector(".img")
if (img.style["opacity"] == "") {
    img.style["opacity"] = 1;
}
img.style["background"] = "url('img/" + Images[randomIndex] + "') no-repeat";
img.style["backgroundSize"] = "cover";
setInterval(() => {
    const fadeOut = setInterval(() => {
        img.style["opacity"] -= 0.02;
        if (img.style["opacity"] <= 0) {
            clearInterval(fadeOut)
        }
    }, 50)
    setTimeout(() => {
        randomIndex = getNextImg();


        img.style["opacity"] = 0;
        img.style["background"] = "url('img/" + Images[randomIndex] + "') no-repeat";




        img.style["backgroundSize"] = "cover";
        const fadeIn = setInterval(() => {
            img.style["opacity"] = parseFloat(img.style["opacity"]) + 0.02;

            if (img.style["opacity"] >= 1) {
                clearInterval(fadeIn)
            }
        }, 50)
    }, (1 / 0.02) * 50)
}, 10000)