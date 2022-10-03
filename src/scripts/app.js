// --- utilities
import { Scrolllable, BrowserCheck } from 'utilities';

// --- components
import {
  WindowScroll,
  WindowResize,
  Header,
  Footer,
  FormElement,
  MainBanner,
  OurSpaces,
  OurFacilities,
  Gallery,
  Reviews,
  HelpCenter,
  Article,
  ScrollAnimate
} from 'components';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  };

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();
  };

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();

      // --- Project
      WindowScroll.init();
      WindowResize.init();
      Header.init();
      Footer.init();
      FormElement.init();
      MainBanner.init();
      OurSpaces.init();
      OurFacilities.init();
      Gallery.init();
      Reviews.init();
      HelpCenter.init();
      Article.init();
      ScrollAnimate.init();
    })(jQuery);
  };

  // --- load
  const load = () => {
    (($) => {
      $(window).on('load', () => {});
    })(jQuery);
  };

  // --- init
  const init = () => {
    load();
    ready();
  };

  // --- return
  return {
    init
  };
})();

// ---  run main js
App.init();
