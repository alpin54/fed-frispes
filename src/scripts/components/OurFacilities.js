/* ------------------------------------------------------------------------------
@name: OurFacilities
@description: OurFacilities
--------------------------------------------------------------------------------- */

const OurFacilities = (() => {
  // handleClickTabs
  const handleClickTabs = () => {
    const _item = '.our-facilities__item';
    const _pane = '.our-facilities__pane';
    const _txt = $('.our-facilities__item--active').text();

    $(_item).on('click', (e) => {
      const _this = $(e.currentTarget);
      const _target = _this.attr('data-target');

      if (!_this.hasClass('our-facilities__item--active')) {
        _this.siblings().removeClass('our-facilities__item--active');
        _this
          .parents('.js-tabs-facilities')
          .find(_pane)
          .removeClass('our-facilities__pane--active');
        _this.parents('.js-tabs-facilities').removeClass('inv-tpl--active');

        _this.addClass('our-facilities__item--active');
        $('[data-pane="' + _target + '"]').addClass(
          'our-facilities__pane--active'
        );
      }
    });
  };

  // handleClickSelect
  const handleClickSelect = () => {
    $('.js-select-facilities').on('click', (e) => {
      const _this = $(e.currentTarget);
      if (
        _this.parents('.js-tabs-facilites').hasClass('our-facilities--active')
      ) {
        _this
          .parents('.js-tabs-facilites')
          .removeClass('our-facilities--active');
      } else {
        _this.parents('.js-tabs-facilites').addClass('our-facilities--active');
      }
    });

    $('body').on('click', (e) => {
      if ($('.js-tabs-facilites').hasClass('our-facilities--active')) {
        $('.js-tabs-facilites').removeClass('our-facilities--active');
      }
    });

    $('body').on('click', '.js-select-facilities', (e) => {
      e.stopPropagation();
    });
  };

  const handleKeyupSelect = () => {
    $('body').on('keyup', (e) => {
      if (
        e.which == 27 &&
        $('.js-tabs-facilites').hasClass('our-facilities--active')
      ) {
        $('.js-tabs-facilites').removeClass('our-facilities--active');
      }
      if (
        e.which == 27 &&
        $('.js-tabs-facilities').hasClass('our-facilities--active')
      ) {
        $('.js-tabs-facilities').removeClass('our-facilities--active');
      }
    });
  };

  // setHeightPane
  const setHeightPane = () => {
    const _controlHeight = $('.our-facilities__control').height();
    const _position =
      $('.our-facilities__control').height() -
      $('.js-our-facilities').find('.owl-dots').width();
    $('.our-facilities__pane').css('height', _controlHeight);
    $('.our-facilities .slider-counter').css('bottom', _position);
  };

  // handleCounter
  const handleCounter = (event) => {
    if (!event.namespace) {
      return;
    }
    const _slides = event.relatedTarget;
    $('.our-facilities .slider-counter').html(
      `<p class="slider-counter__current">${
        _slides.relative(_slides.current()) + 1
      } / </p>
      <p class="slider-counter__length">${_slides.items().length}</p>`
    );
  };

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-our-facilities');
    const _itemLength = $('.js-our-facilities .our-facilities__tabs').length;
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
        dots: true,
        nav: false,
        loop: false,
        touchDrag: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        onInitialized: handleCounter,
        onChanged: handleCounter
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
        $('.our-facilities .slider-counter').remove();
      }
    }
  };

  // init
  const init = () => {
    if (
      $('.js-our-facilities').length ||
      $('.js-tabs-facilities').length ||
      $('.js-select-facilities').length
    ) {
      handleClickTabs();
      handleClickSelect();
      handleKeyupSelect();
      handleRunCarousel();
      setHeightPane();
    }
  };

  return {
    init
  };
})();

export default OurFacilities;
