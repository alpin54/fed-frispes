/* ------------------------------------------------------------------------------
@name: Main Banner
@description: Main Banner
--------------------------------------------------------------------------------- */

const MainBanner = (() => {
  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-main-banner');
    const _itemLength = $('.js-main-banner .main-banner__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        dots: true,
        nav: false,
        loop: false,
        touchDrag: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 7500
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
    }
  };

  // init
  const init = () => {
    if ($('.js-main-banner').length) {
      handleRunCarousel();
    }
  };

  return {
    init
  };
})();

export default MainBanner;
