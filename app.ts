
const url = 'https://api.thecatapi.com/v1/images/search?limit=10';


async function getPics() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
getPics();


function displayImg () {
    console.log("loaded...")
    const imageElement = document.createElement("img") as HTMLImageElement;
    const picDiv = document.querySelector(".container") as HTMLElement;
    getPics().then((data) => {
        console.log(data)
        imageElement.src = data[0].url;
        picDiv.append(imageElement);
    })
};

displayImg();






