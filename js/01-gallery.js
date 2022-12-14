import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(galleryItems);

// звертаюсь до галереї що є масивом об'єктів
const galleryContainer = document.querySelector('.gallery');

// створюю змінну що є строками карток масиву
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

// створюю контейнер і додаю в нього всі картки галереї що є строками
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// додаю слухача подій на КЛІК
galleryContainer.addEventListener('click', onGalleryContainerClick)

// створюю функцію що буде перевіряти КЛІК та за допомогою basicLightbox - відкривати модалку
//  з обраною картинкою. Та закривати при кліку на Escape
function onGalleryContainerClick(evt) {
    blockStandartAction(evt);


   const isGalleryImage = evt.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return
     }
     console.log(evt.target);

     const instance = basicLightbox.create(`<img src=${evt.target.dataset.source} width="800" height="600">`);
 instance.show();

 galleryContainer = addEventListener("keydown", (evt) =>{
    if (evt.code === "Escape" ) {
        instance.close();
    }
 });
}

// console.log(createGalleryCardsMarkup(galleryItems));

// функція заборони стандартних дій щоб браузер не відкривав картинку у іншому вікні
function blockStandartAction(evt) {
    evt.preventDefault();
}


// Створюю розмітку для картки як шаблон
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

  



