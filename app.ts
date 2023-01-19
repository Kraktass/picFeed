
console.log("hej");
const url = 'https://picsum.photos/v2/list';
const imageElement = document.createElement("img") as HTMLImageElement;

async function getPics() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
getPics();


function displayImg () {
    console.log("loaded...")
    const picDiv = document.querySelector(".container") as HTMLElement;
    getPics().then((data) => {
        console.log(data)
        imageElement.src = data[0].url;
        picDiv.append(imageElement);
    })
};

displayImg();




//tdeAYH8x6N9wVue4xBMgy5vdIgDF64KMT1HvrepyqSQ

