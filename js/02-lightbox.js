import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector("ul.gallery");
const markup = createImageGallery(galleryItems);

galleryImages.insertAdjacentHTML("beforeend", markup);

function createImageGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return`
        <li class = "gallery__item">
        <a class = "gallery__link" href="${original}">
        <img class = "gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`;
    })
}
let lightbox = new SimpleLightbox (".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
console.log(galleryItems); 
