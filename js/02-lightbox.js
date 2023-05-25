import { galleryItems } from './gallery-items.js';
// Change code below this line

// import {SimpleLightbox} from 'simplelightbox';


console.log(galleryItems);
let galleryList = document.querySelector('.gallery');

let galleryItem = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
});

galleryList.insertAdjacentHTML('beforeend', galleryItem.join(''));
console.log(galleryList);


let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
