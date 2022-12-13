import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


console.log(createGalleryCardsMarkup(galleryItems));

function createGalleryCardsMarkup(galleryItems)  {
    const markup = galleryItems.map(({ preview, original, description }) => {
        `
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
    });
    console.log(markup);
  }

