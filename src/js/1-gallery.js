// // Додатковий імпорт стилів
import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { images } from "./images";

const galleryContainer = document.querySelector(".gallery");

const imgElem = images.map(({ preview, original, description}) => {
    return `<li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
}).join("");

galleryContainer.insertAdjacentHTML("beforeend", imgElem);

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

