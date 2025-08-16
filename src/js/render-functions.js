

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// 🔹 Всі DOM-елементи зібрані нагорі
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

// 🔹 Створюємо lightbox один раз для контейнера
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// 🔹 Функція очищення галереї
export function clearGallery() {
  galleryEl.innerHTML = '';
}

// 🔹 Функція створення і додавання картинок
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

  // оновлюємо lightbox після додавання нових елементів
  lightbox.refresh();
}


// 🔹 Показати лоадер
export function showLoader() {
  loaderEl.classList.remove('hidden');
}

// 🔹 Приховати лоадер
export function hideLoader() {
  loaderEl.classList.add('hidden');
}
