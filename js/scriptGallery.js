        // $('.portfolio-item').isotope({
        //  	itemSelector: '.item',
        //  	layoutMode: 'fitRows'
        //  });
        $('.galeria-menu ul li').click(function(){
            $('.galeria-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.galeria-item').isotope({
                filter:selector
            });
            return  false;
        });
        $(document).ready(function() {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        }
        });
        });