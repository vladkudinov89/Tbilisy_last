$(document).ready(function(){
		
		$('.burg').click(function(){                
				$('.nav-burger').toggleClass('active');
				$('.burg').toggleClass('b-margin');
				$('.burg span').toggleClass('active');		
                
            });

		$('.tab-content>li:not(":first-of-type")').hide();

		$('.str-ul li').each(function(i){
			$(this).attr('data-tab', 'tab'+i);
		});	

		$('.tab-content>li').each(function(i){
			$(this).attr('data-tab', 'tab'+i);
		});	

		$('.str-ul li').on('click', function(){
			var dataTab = $(this).data('tab');
			var getWrapper = $(this).closest('.tab-wrapper');

			getWrapper.find('.str-ul li').removeClass('active1');
			$(this).addClass('active1');

			getWrapper.find('.tab-content>li').hide();
			getWrapper.find('.tab-content>li[data-tab= '+dataTab+']').show();

		});


		
        });
		
