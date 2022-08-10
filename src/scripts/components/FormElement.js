/* ------------------------------------------------------------------------------
@name: FormElement
@description: FormElement
--------------------------------------------------------------------------------- */

// --- FormElement
const FormElement = (() => {
  // handlRunDatePicker
  const handlRunDatePicker = () => {
    $('.js-datepicker').bootstrapMaterialDatePicker({
      weekStart : 0,
      time: false,
      clearButton: true
    });
  }

  // handlRunTimePicker
  const handlRunTimePicker = () => {
    $('.js-timepicker').bootstrapMaterialDatePicker({
      date: false,
      format: 'HH:mm:ss',
      clearButton: true
    });
  }

  // handlRunDateTimePicker
  const handlRunDateTimePicker = () => {
    $('.js-datetimepicker').bootstrapMaterialDatePicker({
      format : 'YYYY-MM-DD HH:mm',
      clearButton: true
    });
  }

  const init = () => {
    if ($('.js-datepicker').length || $('.js-timepicker').length || $('.js-datetimepicker').length) {
      handlRunDatePicker();
      handlRunTimePicker();
      handlRunDateTimePicker();
    }
  };

  return {
    init
  };
})();

export default FormElement;
