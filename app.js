const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
    galleryUl: document.querySelector('.js-gallery'),
    modalLightbox: document.querySelector('.js-lightbox'), //div
    imageLightbox: document.querySelector('.lightbox__image'), //class
    closeLightbox: document.querySelector('[data-action="close-lightbox"]'), //image
    overlayLightbox: document.querySelector('.lightbox__overlay'), //background

}

const cardsMarkup = createCardsMarkup(galleryItems);

refs.galleryUl.insertAdjacentHTML('beforeend', cardsMarkup);
// make gallery cards
function createCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return`
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
        }
        )
        .join('');
}
// click - open image
refs.galleryUl.addEventListener('click', onGalleryItemClick)

function onGalleryItemClick(evt) {
  const activeGalleryItem = evt.target.classList.contains('gallery__image')
  if (!activeGalleryItem) {
    return
  }
  evt.preventDefault();

  refs.modalLightbox.classList.add('is-open');
  setImageLightbox(evt.target.dataset.source, evt.target.alt )
}

// Close modal window
refs.overlayLightbox.addEventListener('click', modalClose);
refs.closeLightbox.addEventListener('click', modalClose);

function modalClose(evt) {
    refs.modalLightbox.classList.remove('is-open');
      setImageLightbox("", "")
}
// Escape button - close
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        modalClose();
    }
});

function setImageLightbox(src, alt) {
  refs.imageLightbox.src = src
    refs.imageLightbox.alt = alt;
}