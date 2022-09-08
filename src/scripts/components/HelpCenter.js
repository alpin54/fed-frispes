/* ------------------------------------------------------------------------------
@name: HelpCenter
@description: HelpCenter
--------------------------------------------------------------------------------- */

const HelpCenter = (() => {
  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-help-center .help-center__item').each((i, e) => {
      if (_height < $(e).find('.help-center__box').height()) {
        _height = $(e).find('.help-center__box').height();
      }
    });
    $('.help-center__box').height(_height);
  };

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.help-center__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.help-center__box').removeAttr('style');
    }
  };

  // init
  const init = () => {
    if ($('.js-help-center').length) {
      handleCheckHeight();
    }
  };

  return {
    init,
    checkHeight: handleCheckHeight
  };
})();

export default HelpCenter;
