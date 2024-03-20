/* ------------------------------------------------------------------------------
@name: OurSpaces
@description: OurSpaces
--------------------------------------------------------------------------------- */

const OurSpaces = (() => {
  // handleCounter
  const handleCounter = (event) => {
    if (!event.namespace) {
      return;
    }
    const _slides = event.relatedTarget;
    const _itemCounter = `<p class="slider-counter__current">${_slides.relative(
      _slides.current() + 1
    )} / </p><p class="slider-counter__length">${
      _slides.items().length - 2
    }</p>`;
    $('.our-spaces .slider-counter').html(_itemCounter);
  };

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-our-spaces');
    const _itemLength = $('.js-our-spaces .our-spaces__item').length;
    const _itemRun = 3;

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
          items: 3,
          touchDrag: true,
          mouseDrag: false,
          nav: true,
          dots: true,
          navText: [
            "<i class='fi-chevron-left'></i>",
            "<i class='fi-chevron-right'></i>"
          ],
          smartSpeed: 500,
          margin: 32,
          onInitialized: handleCounter,
          onChanged: handleCounter,
          responsive: {
            768: {
              items: 2
            },
            1024: {
              items: 3
            }
          }
        });
      } else {
        if (_selector.hasClass('owl-carousel')) {
          _selector.removeClass('owl-carousel');
          $('.our-spaces .slider-counter').remove();
        }
      }
    }
  };

  // init
  const init = () => {
    if ($('.js-our-spaces').length) {
      handleRunCarousel();
    }
  };

  return {
    init,
    destroyCarousel: handleRunCarousel
  };
})();

export default OurSpaces;
