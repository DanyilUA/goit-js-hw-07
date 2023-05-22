import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryList = document.querySelector('.gallery');

let galleryItem = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </li>`;
});

galleryList.insertAdjacentHTML('beforeend', galleryItem.join(''));
console.log(galleryList);

galleryList.addEventListener('click', onClickImage);

function onClickImage(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    let targetImage = evt.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${targetImage}" width="800" height="600">`,
        {
            onShow: () => { document.addEventListener('keydown', onEscKeyDown); },
            onClose: () => { document.removeEventListener('keydown', onEscKeyDown); },
        });
    
    instance.show();

    function onEscKeyDown(evt) {
        if (evt.code === 'Escape') {
        instance.close();
        }
    };
};

