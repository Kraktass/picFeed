

const url = 'https://picsum.photos/v2/list?page=2&limit=100';
const imageElement = document.createElement('img') as HTMLImageElement;
const docu = document.querySelector('document') as HTMLElement;

async function getPics() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


function displayImg () {
    console.log("loaded...")
    const picDiv = document.querySelector(".container") as HTMLElement;
    getPics().then((data) => {
        imageElement.src = data.url;
        picDiv.append(imageElement);
    });
};

displayImg();
