
  function scrollSpy() {
    $('body').scrollspy({ target: '#navbarScroll' });

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh');
    });

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  }

  function logoScrollToTop() {
    $('.navbar-brand').click(function(){
      $('html, body').animate({scrollTop : 0},1200);
      return false;
    });
  }

  function bgHeight() {
    $('.bg').height($(window).height() - 50);
  }

  function portfolioSlide() {
    $('.thumbnail').hover(function(){
        $(this).find('.caption').slideDown(250); //.fadeIn(250)
      }, function(){
        $(this).find('.caption').slideUp(250); //.fadeOut(205)
      }
    );
  }

  function popOvers() {
    $("tr td img").popover({ trigger: "hover" });
  }

  function footerScrollToTop() {
    $('#footerScroll').hover(function(){
      $(this).addClass('animated bounce');
    });
    $('#footerScroll').click(function(){
      $('html, body').animate({scrollTop : 0},1200);
      return false;
    });
  }

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $('#custom-nav').addClass('affix');
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $('#custom-nav').removeClass('affix');
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  function respond() {
    // Put all responsive functions here
    bgHeight();
    scrollSpy();
    portfolioSlide();
    logoScrollToTop();
    popOvers();
  }

  $(document).ready(function() {
    respond();
    // topScrollButton();
  });

  $(window).load(function() {

  });

  $(window).resize(function() {
    respond();
  });

  $(window).scroll(function() {

  });
