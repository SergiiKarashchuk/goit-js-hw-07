import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(evt) {
   const isGalleryImage = evt.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return
     }
     console.log(evt.target);
}

console.log(createGalleryCardsMarkup(galleryItems));

function createGalleryCardsMarkup(galleryItems)  {
    return galleryItems.map(({ preview, original, description }) => {
       return `
        <div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>
        `; 
    }).join('');
  }

