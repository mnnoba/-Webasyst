$(document).ready(function () {
			
			$('.select-view span').live('click', function(){			
			$('.select-view span.selected').removeClass('selected');
			if ($(this).attr('class')=='thumbs'){
			$('ul.product_list').removeClass('stroka');
			}
			else {
			$('ul.product_list').addClass('stroka');	
			}
			$(this).addClass('selected');
														  })
							
	/*
	var view = $.cookie('select-view');  		
  	if(view == 'list'){
		$('.select-view span').removeClass('selected');
		$('.select-view span.list').addClass('selected');
		$('.product-list').addClass('list').removeClass('thumbs');		
    }else if(view == 'thumbs'){
		$('.select-view span').removeClass('selected');
		$('.select-view span.thumbs').addClass('selected');
      	$('.product-list').addClass('thumbs').removeClass('list');					
    }
	$('.select-view span').click(function(){		
		$('.select-view span').removeClass('selected');
		if($(this).hasClass('list')){			
			$(this).addClass('selected');
			$('.product-list').addClass('list').removeClass('thumbs');						
			$.cookie('select-view', 'list', {expires: 30, path: '/'});
		}else{			
			$(this).addClass('selected');
			$('.product-list').addClass('thumbs').removeClass('list');						
			$.cookie('select-view', 'thumbs', {expires: 30, path: '/'});
		}
	});
	*/
});