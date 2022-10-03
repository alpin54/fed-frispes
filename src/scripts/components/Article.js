/* ------------------------------------------------------------------------------
@name: Article
@description: Article
--------------------------------------------------------------------------------- */

const Article = (() => {
  // --- handleCheckHeight
  const handleCheckHeight = () => {
    handleResetHeight();
    if ($(window).width() > 575.86) {
      let _height = 0;
      $('.js-set-article .article__item').each((i, e) => {
        if (_height < $(e).find('.article__box').height()) {
          _height = $(e).find('.article__box').height();
        }
      });
      $('.article__box').height(_height);
    }
  };

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.article__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.article__box').removeAttr('style');
    }
  };

  // init
  const init = () => {
    if ($('.js-set-article').length) {
      handleCheckHeight();
    }
  };

  return {
    init,
    checkHeight: handleCheckHeight
  };
})();

export default Article;
