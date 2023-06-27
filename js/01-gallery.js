import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector(".gallery");
const markup = createImageGallery(galleryItems);

galleryImages.insertAdjacentHTML("beforeend", markup);

function createImageGallery(galleryItems) {
    return galleryItems
    .map( 
        ({preview, original, description}) => {
            return` 
            <li class="gallery__item">
             <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            </li>`;
        })
    .join("");
}   
function ongalleryItemsClick(e) {
    e.preventDefault();
    if (e.target.classList.contains("gallery__image"))
        return;
    const source = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${source}" width="800" height="600"></img>`);
    onShow:(instance) => galleryImages.addEventListener; ("click", ongalleryItemsClick);
    onClose:(instance) => galleryImages.removeEventListener("click", ongalleryItemsClick);
}
galleryImages.addEventListener("click", onGalleryItemsClick);
console.log(galleryItems);
