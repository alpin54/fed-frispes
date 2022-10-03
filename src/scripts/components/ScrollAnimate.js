/* ------------------------------------------------------------------------------
@name: ScrollAnimate
@description: ScrollAnimate
--------------------------------------------------------------------------------- */

// --- ScrollAnimate
const ScrollAnimate = (() => {
  // --- handleRevealConfig
  const handleRevealConfig = (origin = 'bottom', delay = '250') => {
    const _config = {
      duration: 1000,
      distance: '24px',
      delay: delay,
      origin: origin,
      interval: 250
    };
    return _config;
  };

  // --- handleSrollAnimateHome
  const handleSrollAnimateHome = () => {
    // main-banner__txt-wrapper
    if ($('.main-banner__txt-wrapper').length) {
      ScrollReveal().reveal(
        '.main-banner__txt-wrapper',
        handleRevealConfig('left')
      );
      ScrollReveal().reveal(
        '.main-banner__txt-wrapper:last-child',
        handleRevealConfig('right', '400')
      );
    }
    // main-banner__list
    if ($('.main-banner__list').length) {
      ScrollReveal().reveal(
        '.main-banner__list',
        handleRevealConfig('bottom', '850')
      );
      ScrollReveal().reveal(
        '.main-banner__box',
        handleRevealConfig('bottom', '1200')
      );
      if ($(window).width() < 575.86) {
        ScrollReveal().reveal('.main-banner__list', handleRevealConfig());
        ScrollReveal().reveal('.main-banner__box', handleRevealConfig());
      }
    }
    // our-spaces__head
    if ($('.our-spaces__head').length) {
      ScrollReveal().reveal('.our-spaces__head', handleRevealConfig());
    }
    // our-spaces__body
    if ($('.our-spaces__body').length) {
      ScrollReveal().reveal(
        '.our-spaces__body',
        handleRevealConfig('bottom', '500')
      );
    }
    // why-frisfes__txt
    if ($('.why-frisfes__txt').length) {
      ScrollReveal().reveal('.why-frisfes__txt', handleRevealConfig());
    }
    // why-frisfes__item
    if ($('.why-frisfes__item').length) {
      ScrollReveal().reveal('.why-frisfes__item', handleRevealConfig());
    }
    // our-facilities__head
    if ($('.our-facilities__head').length) {
      ScrollReveal().reveal('.our-facilities__head', handleRevealConfig());
    }
    // our-facilities__body
    if ($('.our-facilities__body').length) {
      ScrollReveal().reveal(
        '.our-facilities__body',
        handleRevealConfig('bottom', '500')
      );
    }
    // gallery__head
    if ($('.gallery__head').length) {
      ScrollReveal().reveal('.gallery__head', handleRevealConfig());
    }
    // gallery__body
    if ($('.gallery__body').length) {
      ScrollReveal().reveal(
        '.gallery__body',
        handleRevealConfig('bottom', '500')
      );
    }
    // who-uses__head
    if ($('.who-uses__head').length) {
      ScrollReveal().reveal('.who-uses__head', handleRevealConfig());
    }
    // who-uses__item
    if ($('.who-uses__item').length) {
      ScrollReveal().reveal('.who-uses__item', handleRevealConfig());
    }
    // reviews__head
    if ($('.reviews__head').length) {
      ScrollReveal().reveal('.reviews__head', handleRevealConfig());
    }
    // reviews__body
    if ($('.reviews__body').length) {
      ScrollReveal().reveal(
        '.reviews__body',
        handleRevealConfig('bottom', '500')
      );
    }
    // help-center__head
    if ($('.help-center__head').length) {
      ScrollReveal().reveal('.help-center__head', handleRevealConfig());
    }
    // help-center__item
    if ($('.help-center__item').length) {
      ScrollReveal().reveal('.help-center__item', handleRevealConfig());
    }
    // help-center__foot
    if ($('.help-center__foot').length) {
      ScrollReveal().reveal('.help-center__foot', handleRevealConfig());
    }
    // article__head
    if ($('.article__head').length) {
      ScrollReveal().reveal('.article__head', handleRevealConfig());
    }
    // article__item
    if ($('.article__item').length) {
      ScrollReveal().reveal('.article__item', handleRevealConfig());
    }
    // offer__txt
    if ($('.offer__txt').length) {
      ScrollReveal().reveal('.offer__txt', handleRevealConfig('left', '400'));
      ScrollReveal().reveal('.offer__img', handleRevealConfig('right', '400'));
    }
  };

  // --- init
  const init = () => {
    handleSrollAnimateHome();
  };

  // --- return
  return {
    init
  };
})();

export default ScrollAnimate;
