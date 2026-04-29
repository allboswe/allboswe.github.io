export function renderCharacterGalleryLightbox() {
  return `
    <div class="gallery-lightbox" aria-hidden="true">
      <button class="gallery-lightbox-close" type="button" aria-label="Close image preview">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <img src="" alt="" class="gallery-lightbox-image" />
    </div>
  `;
}
