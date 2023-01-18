

const url = 'https://picsum.photos/v2/list?page=1&limit=1';
const imageElement = document.createElement('img') as HTMLImageElement;
const docu = document.querySelector('document') as HTMLElement;

async function getPics() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

docu.addEventListener("load", (event) => {
    console.log("loaded...")
    const picDiv = document.querySelector(".container") as HTMLElement;
    event.preventDefault();
    getPics().then((data) => {
        imageElement.src = data.url;
        picDiv.append(imageElement);
    });
});