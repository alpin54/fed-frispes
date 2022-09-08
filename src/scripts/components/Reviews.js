/* ------------------------------------------------------------------------------
@name: Reviews
@description: Reviews
--------------------------------------------------------------------------------- */

const Reviews = (() => {
  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-set-reviews .reviews__item').each((i, e) => {
      if (_height < $(e).find('.reviews__box').height()) {
        _height = $(e).find('.reviews__box').height();
      }
    });
    $('.reviews__box').height(_height);
  };

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.reviews__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.reviews__box').removeAttr('style');
    }
  };

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-reviews');
    const _itemLength = $('.js-reviews .reviews__item').length;
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
        rewind: false,
        autoplay: false,
        autoHeight: true,
        autoWidth: true,
        dots: true,
        nav: true,
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        dotsSpeed: 1000,
        navSpeed: 1000,
        dragEndSpeed: 800,
        navText: [
          "<i class='fi-chevron-left'></i>",
          "<i class='fi-chevron-right'></i>"
        ]
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('reviews--single');
    }
  };

  // init
  const init = () => {
    if ($('.js-reviews').length || $('.js-set-reviews').length) {
      handleRunCarousel();
      handleCheckHeight();
    }
  };

  return {
    init,
    checkHeight: handleCheckHeight
  };
})();

export default Reviews;
