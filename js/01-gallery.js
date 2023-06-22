import { GalleryItems } from './gallery-items.js';
// Change code below this line
const GalleryImages = document.querySelector("ul.gallery");
const markup = createImageGallery(GalleryItems)

GalleryImages.insertAdjacentElement("beforeend", markup);

function createImageGallery(GalleryItems) {
    return GalleryItems
    .map( 
        ({preview, original, description}) => {
            return ` 
            <li class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
            <img class = "gallery__image" src="${preview}" alt = ${description}" />
            </a>
            </li> ` ;
        }
    )
};
join("");
const onGalleryItemsClick = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("gallery__image")) 
    return;
    const source = e.target.dataset.source;
    const instance = basicLightbox.create (`
     <img src = "${source}" width = "800" height = "600"></img> `), 
    onShow: (instance) => galleryImages.addEventListener("click", onGalleryItemsClick),
    onClose: (instance) => galleryImages.removeEventListener ("click", onGalleryItemsClick),`
}

galleryImages.addEventListener("click", onGalleryItemsClick);
console.log(galleryItems);
