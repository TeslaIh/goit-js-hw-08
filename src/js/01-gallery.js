import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Add imports above this line

// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryList = createGalleryImagesList(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryList);

function createGalleryImagesList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <li class = "gallery__item">
  <a class = "gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  title="${description}"
  />
  </a>
  </li>
  `;
    }).join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData:"alt",
    captionPosition:'bottom',
    captionDelay: 250
});