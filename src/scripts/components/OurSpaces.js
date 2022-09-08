/* ------------------------------------------------------------------------------
@name: OurSpaces
@description: OurSpaces
--------------------------------------------------------------------------------- */

const OurSpaces = (() => {
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
        smartSpeed: 500
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
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
    init
  };
})();

export default OurSpaces;
