

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


export function clearGallery() {
  galleryEl.innerHTML = '';
}


export function createGallery(images) {
  const markup = images
    .map(
      ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
        <a class="gallery__link" href="${largeImageURL}">
        <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
  </div>
</a>
      `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);


  lightbox.refresh();
}



export function showLoader() {
  loaderEl.classList.remove('hidden');
}


export function hideLoader() {
  loaderEl.classList.add('hidden');
}
