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

     let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});
     gallery.on('show.simplelightbox', function () {

         // do something…
     });
    }




console.log(createGalleryCardsMarkup(galleryItems));

// функція заборони стандартних дій щоб браузер не відкривав картинку у іншому вікні
function blockStandartAction(evt) {
    evt.preventDefault();
}


// Створюю розмітку для картки як шаблон
function createGalleryCardsMarkup(galleryItems)  {
    return galleryItems.map(({ preview, original, description }) => {
       return `
       <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `; 
    }).join('');
  }

  

