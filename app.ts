
const url = 'https://api.thecatapi.com/v1/images/search?limit=10';


async function getPics() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
getPics();


function displayImg () {
    console.log("loaded...")
    getPics().then((data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
        const picDiv = document.querySelector(".container") as HTMLElement;
        const imageElement = document.createElement("img") as HTMLImageElement;
        imageElement.src = data[i].url;
        imageElement.style.width = "20%"
        imageElement.style.height = "20%"
        picDiv.append(imageElement);
        }
    });
};

displayImg();






