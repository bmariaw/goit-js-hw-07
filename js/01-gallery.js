import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryClick);

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

function onGalleryClick(event) {
    event.preventDefault();

    const target = event.target;
    const link = target.closest('.gallery__link');
    if (!link) {
        return;
    }

    const originalImage = target.dataset.source;

    const instance = basicLightbox.create(

        `<img src="${originalImage}" width="800" height="600">`
        , {
            onShow: () => {
                document.addEventListener("keydown", onEscape);
            },
            onClose: () => {
                document.removeEventListener("keydown", onEscape);
            },
        });
    function onEscape(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
    instance.show();
}