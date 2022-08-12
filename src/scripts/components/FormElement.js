/* ------------------------------------------------------------------------------
@name: FormElement
@description: FormElement
--------------------------------------------------------------------------------- */

// --- FormElement
const FormElement = (() => {
  // --- handleShowDropdown
  const handleShowDropdown = () => {
    $('.js-fe-dropdown .fe__dropdown__dropbtn').on('click', (e) => {
      const _this = $(e.currentTarget);
      if (_this.parents('.fe__dropdown').hasClass('fe__dropdown--show')) {
        _this.parents('.fe__dropdown').removeClass('fe__dropdown--show');
      } else {
        $('.fe__dropdown').removeClass('fe__dropdown--show');
        _this.parents('.fe__dropdown').addClass('fe__dropdown--show');
      }
    });
  };

  // --- handleHideDropdown
  const handleHideDropdown = () => {
    // --- handle hide click
    $('body').on('click', (e) => {
      if ($('.fe__dropdown').hasClass('fe__dropdown--show')) {
        $('.fe__dropdown').removeClass('fe__dropdown--show');
      }
    });

    // --- stop progation
    $('body').on('click', '.fe__dropdown', (e) => {
      e.stopPropagation();
    });

    // --- handle hide keyup
    $('body').on('keyup', (e) => {
      if (
        e.which == 27 &&
        $('.fe__dropdown')
          .parents('.fe__dropdown')
          .hasClass('fe__dropdown--show')
      ) {
        $('.fe__dropdown').removeClass('fe__dropdown--show');
      }
    });
  };

  // handleSelectDropdown
  const handleSelectDropdown = () => {
    $('.fe__dropdown__item').on('click', (e) => {
      const _this = $(e.currentTarget);
      const _val = _this.attr('data-value');
      const _text = _this.text();

      _this.parents('.fe__dropdown').removeClass('fe__dropdown--show');
      _this
        .parents('.fe__dropdown')
        .find('.fe__dropdown__input')
        .attr('value', _val);
      _this.parents('.fe__dropdown').find('.fe__dropdown__text').text(_text);
    });
  };

  const init = () => {
    if ($('.js-fe-dropdown').length) {
      handleShowDropdown();
      handleHideDropdown();
      handleSelectDropdown();
    }
  };

  return {
    init
  };
})();

export default FormElement;
