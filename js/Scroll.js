$(document).ready(function(){       
                var scroll_pos = 0;
                $(document).scroll(function() { 
                    scroll_pos = $(this).scrollTop();
                    if(scroll_pos > 100) {
                        $(".navbar").css('background-color', 'rgba(1, 64, 52, 0.9)', 'z-index', '5');
                    } else {
                        $(".navbar").css('background-color', 'transparent');
                    }
                });
            });