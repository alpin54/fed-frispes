/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

// --- Footer
const Footer = (() => {
  // handle padding bottom
  const handleFooterSticky = () => {
    const _footer = $(".footer").innerHeight();

    if ($(window).width() > 767) {
      $(".main-site").css("paddingBottom", _footer);
    } else {
      $(".main-site").removeAttr("style");
    }
  };

  const init = () => {
    handleFooterSticky();
  };

  return {
    init,
    footerSticky: handleFooterSticky,
  };
})();

export default Footer;
