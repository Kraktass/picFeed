
const url = 'https://api.thecatapi.com/v1/images/search?limit=10';


async function getPics() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



function displayImgOne () {
    console.log("loaded...")
    getPics().then((data) => {
        for (let i = 0; i < data.length; i++) {
        const picDiv = document.querySelector(".containerLeft") as HTMLElement;
        const imageElement = document.createElement("img") as HTMLImageElement;
        imageElement.src = data[i].url;
        picDiv.append(imageElement);
        }
    });
};
displayImgOne();

function displayImgTwo () {
    console.log("loaded...")
    getPics().then((data) => {
        for (let i = 0; i < data.length; i++) {
        const picDiv = document.querySelector(".containerRight") as HTMLElement;
        const imageElement = document.createElement("img") as HTMLImageElement;
        imageElement.src = data[i].url;
        picDiv.append(imageElement);
        }
    });
};
displayImgTwo();

const infiniteScroll = () => {
    throttle(() => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (endOfPage) {
        displayImgOne();
        displayImgTwo();
    };
  }, 1000);
};

window.addEventListener('scroll', infiniteScroll);

let throttleTimer: boolean;
const throttle = (callback: () => void, time: number | undefined) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};
