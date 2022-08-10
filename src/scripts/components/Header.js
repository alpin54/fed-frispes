/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import { Scrolllable, BrowserCheck } from 'utilities';

// --- Header
const Header = (() => {
  // --- handle mobile menu
  const handleMobileMenu = () => {
    $('.js-mobile-menu').on('click', (e) => {
      const _this = $(e.currentTarget);
      if ($('body').hasClass('show-nav')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
      } else {
        Scrolllable.disable();
        $('body').addClass('show-nav');
      }
    });
  };

  // --- handle destroy mobile menu
  const handleDestroyMobileMenu = () => {
    if ($(window).width() > 991.98) {
      if ($('body').hasClass('show-nav')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
      }
    }
  };

  // --- init
  const init = () => {
    handleMobileMenu();
  };

  // --- return
  return {
    init,
    destroyMobileMenu: handleDestroyMobileMenu
  };
})();

export default Header;
