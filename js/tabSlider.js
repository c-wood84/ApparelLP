$('.clickarea').fancybox({ 'scrolling' : 'no' });
    // declare global
    // var slider_array = new Array(); 
    // launch bxslider
    // $('#DressSlide,#boysgirlsSlide,#camoSlide,#activeSlide').each(function(i){
    //     slider_array[i] = $(this).bxSlider({controls:true, pager: false, minSlides: 2, maxSlides: 2, slideWidth: 340, mode:'horizontal', speed:2000, auto:true});
    // });
    

  // $(".tabContents").hide(); // Hide all tab content divs by default
  
  //     $(".tabContents:first").show(); // Show the first div of tab content by default     
  //     $(".tabContainer ul li a").click(function(){ //Fire the click event
        
  //       var activeTab = $(this).attr("href"); // Catch the click link
                   
          
  //         $(".tabContainer ul li a").removeClass("active"); // Remove pre-highlighted link
  //         $(this).addClass("active"); // set clicked link to highlight state
  //         $(".tabContents").hide(); // hide currently visible tab content div
  //         $(activeTab).fadeIn(); // show the target tab content div by matching clicked link.  
        
  //       return false; //prevent page scrolling on tab click
          


          
  //     });
    $(".tabContents").css({
        marginBottom: '30px',
        height: '450px'
    });
    $(".tabContainer a#dress").on('click', function(dj) {
        dj.preventDefault();
        $('.tabContainer ul li a').removeClass('active');
        $("div#dress.tabContents").css({marginTop:'0px'});
        $(this).addClass('active');
    });
    $(".tabContainer a#boysgirls").on('click', function(dj) {
        dj.preventDefault();
        $('.tabContainer ul li a').removeClass('active');
        $("div#dress.tabContents").css({marginTop:'-480px'});
         $(this).addClass('active');
    });
    $(".tabContainer a#camo").on('click', function(dj) {
        dj.preventDefault();
        $('.tabContainer ul li a').removeClass('active');
        $("div#dress.tabContents").css({marginTop:'-960px'});
         $(this).addClass('active');
    });
    $(".tabContainer a#active").on('click', function(dj) {
        dj.preventDefault();
        $('.tabContainer ul li a').removeClass('active');
        $("div#dress.tabContents").css({marginTop:'-1440px'});
         $(this).addClass('active');
    });



    $('#DressSlide').bxSlider({
        controls:true, 
        pager: false, 
        minSlides: 2, 
        maxSlides: 2, 
        slideWidth: 340, 
        mode:'horizontal', 
        speed:2000,
        auto: true
    });

    $('#boysgirlsSlide').bxSlider({
        controls:true, 
        pager: false, 
        minSlides: 2, 
        maxSlides: 2, 
        slideWidth: 340, 
        mode:'horizontal', 
        speed:2000, 
        autoStart:true,
        autoDelay:3,
        auto: true
    });
    $('#camoSlide').bxSlider({
        controls:true, 
        pager: false, 
        minSlides: 2, 
        maxSlides: 2, 
        slideWidth: 340, 
        mode:'horizontal', 
        speed:2000, 
        autoStart:true,
        autoDelay:3,
        auto: true
    });
    $('#activeSlide').bxSlider({
        controls:true, 
        pager: false, 
        minSlides: 2, 
        maxSlides: 2, 
        slideWidth: 340, 
        mode:'horizontal', 
        speed:2000, 
        autoStart:true,
        autoDelay:3,
        auto: true
    });



    $('#MixMatch').bxSlider({
      mode: 'fade',
      slideWidth: 490,
      pager: false,
      speed:2000,
      auto:false
    });