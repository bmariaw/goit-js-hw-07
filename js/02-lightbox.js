import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}" />
                </a>
            </li>`;
        })
        .join('');
}

new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay: 250,
});