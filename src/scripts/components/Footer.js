/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

const Footer = (() => {
  const _width = 767.98;

  // handleRunCarousel
  const handleClickAccordion = () => {
    $('.js-footer-acc .footer__title').on('click', (e) => {
      const _this = $(e.currentTarget);

      if ($(window).width() <= _width) {
        if (
          _this
            .parents('.footer__menu__item')
            .hasClass('footer__menu__item--show')
        ) {
          _this
            .parents('.footer__menu__item')
            .removeClass('footer__menu__item--show')
            .find('.footer__nav')
            .delay(250)
            .slideUp();
        } else {
          _this
            .parents('.footer__menu__item')
            .siblings('.footer__menu__item')
            .removeClass('footer__menu__item--show')
            .find('.footer__nav')
            .delay(250)
            .slideUp();
          _this
            .parents('.footer__menu__item')
            .find('.footer__nav')
            .slideDown()
            .parents('.footer__menu__item')
            .addClass('footer__menu__item--show');
        }
      }
    });
  };

  // handle Destroy Accordion
  const handleDestroyAccordion = () => {
    if ($(window).width() > _width) {
      $('.js-footer-acc .footer__menu__item')
        .removeClass('footer__menu__item--show')
        .find('.footer__nav')
        .removeAttr('style');
    }
  };

  // handle padding bottom
  const handleFooterSticky = () => {
    const _footer = $('.footer').innerHeight();

    if ($(window).width() > _width) {
      $('.main-site').css('paddingBottom', _footer);
    } else {
      $('.main-site').removeAttr('style');
    }
  };

  // init
  const init = () => {
    handleClickAccordion();
    handleFooterSticky();
  };

  return {
    init,
    footerSticky: handleFooterSticky,
    destroyAccordion: handleDestroyAccordion
  };
})();

export default Footer;
