$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.resnav').addClass('active');
      } else {
          $('.resnav').removeClass('active');
      }
  });
});