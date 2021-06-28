$(document).ready(function () {
    $(".nav-link").click(function (event) {
      event.preventDefault();
  
      var smoothScroll = this.hash;
  
      $("html").animate({
          scrollTop: $(smoothScroll).offset().top - 56,
        },
        800,
      );
    });
  });
  $('[data-toggle="tooltip"]').tooltip()