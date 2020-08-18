$(function(){

    /*Fixed Header*/

    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();
    let data = $("[data-scroll]");

    checkScroll(scrollOffset);

    $(window).on("scroll load resize", function(){
        introH = $("#intro").innerHeight();
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        console.log(scrollOffset);
    });

    function checkScroll(scrollOffset){

    if (scrollOffset >= introH){
        $('.header').addClass('fixed');
    }
    else{
        $('.header').removeClass('fixed');
     };
    };




    /*Smooth(плавный) scroll*/

    $('[data-scroll]').on("click", function(event){
        event.preventDefault();

        scrollOffset = $(window).scrollTop();
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        $("nav a").removeClass('active');
        $(this).addClass('active');

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });




    /*Menu nav toggle*/

    $('.burger').click(function(){
        event.preventDefault();

        $('#nav').toggleClass("active");
        $('.burger').toggleClass('active');
    });

     $('[data-scroll]').on("click", function(event){
         event.preventDefault();

         $('#nav').removeClass("active");
         $('.burger').removeClass('active');
     });




    /*Categories Filter*/

    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'show__all'){
            $("[data-cat]").show();
        } else{
           $("[data-cat]").each(function(){

            let workCat = $(this).data('cat');

           if(workCat != cat){
               $(this).hide();
           } else{
               $(this).show();
           }
          });
        }
    });



    /*Scroll Element Animate*/

    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or     function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should     initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should     trigger the animation

});
});