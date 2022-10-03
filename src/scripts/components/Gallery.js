/* ------------------------------------------------------------------------------
@name: Gallery
@description: Gallery
--------------------------------------------------------------------------------- */

const Gallery = (() => {
  // handleLightbox
  const handleLightbox = () => {
    const $gallery = new SimpleLightbox('.js-popup-image');
  };

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-gallery');
    const _itemLength = $('.js-gallery .gallery__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if ($(window).width() > 767.86) {
      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          autoHeight: true,
          autoWidth: false,
          mouseDrag: false,
          touchDrag: true,
          pullDrag: false,
          items: 3,
          margin: 32,
          nav: true,
          loop: true,
          dots: false,
          autoplay: false,
          navSpeed: 500,
          navText: [
            "<i class='fi-chevron-left'></i>",
            "<i class='fi-chevron-right'></i>"
          ]
        });
      } else {
        if (_selector.hasClass('owl-carousel')) {
          _selector.removeClass('owl-carousel');
        }
        _selector.addClass('gallery--single');
      }
    }
  };

  // init
  const init = () => {
    if ($('.js-gallery').length) {
      handleLightbox();
      handleRunCarousel();
    }
  };

  return {
    init,
    destroyCarousel: handleRunCarousel
  };
})();

export default Gallery;
