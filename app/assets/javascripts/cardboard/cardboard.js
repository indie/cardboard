// Only for Cardboard Admin Area
// see lib/cardboard/generators/cardboard/assets/templates for helpers
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-button
//= require bootstrap-dropdown
//= require bootstrap-modal
//= require bootstrap-alert
//= require cardboard/wysihtml5-0.4.0pre 
//= require bootstrap-wysihtml5/core
//= require bootstrap-datepicker
//= require cocoon
//= require cardboard/wysihtml5-setup

// // require jquery.pjax
// $(function(){

//   $('.wysihtml5').each(function(i, elem) {
//     $(elem).wysihtml5();
//   });

//   $('a:not([data-remote]):not([data-behavior]):not([data-skip-pjax])').pjax('[data-pjax-container]');
  
// })
$(function(){

  $(document).on('focus', '.datepicker:not(.hasDatepicker)', function(){
    $(this).datepicker({format: 'yyyy-mm-dd'});
  });

})
