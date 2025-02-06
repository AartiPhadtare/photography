$(document).ready(function(){
    $('.homepagebanner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay:true

    });
    $('.serviceslist').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
        ]

    });

    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      getSortData: {
       
        category: '[data-category]',
        
      }
    });
         // filter functions
         var filterFns = {
        };
    
        // bind filter button click
        $('#filters').on( 'click', 'button', function() {
          var filterValue = $( this ).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[ filterValue ] || filterValue;
          $grid.isotope({ filter: filterValue });
        });
    
        $('.button-group').each( function( i, buttonGroup ) {
          var $buttonGroup = $( buttonGroup );
          $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });  
  
  
  });

  if ($('.wow').length) {
    new WOW().init();
}

 

