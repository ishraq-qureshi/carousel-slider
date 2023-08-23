jQuery(function(){
    jQuery('.carousel-slider').slick({
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "dots": true,
        "infinite": false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,                
              }
            },
            {
                breakpoint: 667,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,                
                }
              },
        ]
    });

    function calculateSlideHeight (auto = false){
        jQuery('.carousel-slide').each(function(){
            const parentHeight = jQuery(this).parent().innerHeight();
            if(!auto) {
                jQuery(this).css({"height": `${parentHeight - 80}px`})
            } else {
                console.log('test');
                jQuery(this).css({"height": 'auto'})
            }
        })
    }

    calculateSlideHeight();

    jQuery('.carousel-content').each(function(){
        const wrapperSize = jQuery(this).outerHeight()
        const contentHeight = jQuery(this).find('p').outerHeight();
        if(contentHeight > wrapperSize){
            jQuery(this).parent().append('<div class="carousel-slide-readmore"><button class="readmore">Read more...</button></div>')
        }
    })

    jQuery(document).on('click','.readmore', function(){
        jQuery(this).parents('.carousel-slide-body').find('.carousel-content').toggleClass('expand');
        jQuery(this).toggleClass('active');
        calculateSlideHeight(true);

        if(jQuery(this).hasClass('active')){
            jQuery(this).text('Show Less...')
        } else {
            jQuery(this).text('Read More...')
        }
        setTimeout(() => {            
            calculateSlideHeight();
        }, 100)
    });
})