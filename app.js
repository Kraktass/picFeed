"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://picsum.photos/v2/list?page=1&limit=1';
const imageElement = document.createElement('img');
const docu = document.querySelector('document');
function getPics() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
function displayImage() {
    console.log("loaded...");
    const picDiv = document.querySelector(".container");
    getPics().then((data) => {
        imageElement.src = data.url;
        picDiv.append(imageElement);
    });
}
;
displayImage();