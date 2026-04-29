export function initGalleryLightbox() {
  const lightbox = document.querySelector('.gallery-lightbox');
  const lightboxImage = document.querySelector('.gallery-lightbox-image');
  const closeButton = document.querySelector('.gallery-lightbox-close');
  const galleryImages = document.querySelectorAll('.gallery-image');

  if (!lightbox || !lightboxImage || !closeButton || galleryImages.length === 0) return;

  function openLightbox(image) {
    const fullImage = image.dataset.fullImage || image.src;

    lightboxImage.src = fullImage;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }

  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      openLightbox(image);
    });
  });

  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
}
