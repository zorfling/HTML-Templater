$(document).ready(function(){
	
	Site.init();
	
});

var Site = {
	
	init:function(sliderSettings) {
		
		
		Site.grid();
		
		//HANDLE EXTERNAL LINKS
		Site.externalLinks();
				
	
		//SEARCH
		if($('#search').length != 0) {
			Site.search();
		}
	
				
		//TEXT RESIZZLE
		if($('#usability-controls').length != 0) {
			$('#primary-inner').textResizzle();	
		}
		
		//PRINT
		if($('#usability-controls').length != 0) {
			Site.print();
		}
		
		//IMAGE GALLERY
		if($('#image-gallery').length != 0) {
			Site.fancyBoxInit();
			$('#image-gallery li:nth-child(5n)').addClass('nth-child-fifth');
		
		}
		
		//FORM VALIDATION
		if($('.val-form').length != 0){
			$('.val-form').validate();
		}
		
		//CONTACT FORM VALIDATION
		if($('#contact-form').length != 0) {
			$('#contact-form').validate();
		}

	},
	
	grid:function() {
		var body = $('body');
	
		
		body.append('<div id="grid-png" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; z-index: 9999; "><div class="container_16" style="height: 100%; background: url(development/grids/grid16-lh20.png) repeat-y 0 0;"></div></div>');
				
	    body.dblclick(function () { 
	      $("#grid-png").toggle(); 
	    });
		
		
		    		
	},

	memberLogin:function() {
  
        $("#member-login").click(function(e) {
            e.preventDefault();
            $("#member-login-menue").toggle();
            $(this).toggleClass("menu-open");
        });

        $("#member-login-menue").mouseup(function() {
            return false
        });
        
        $(document).mouseup(function(e) {
            if($(e.target).parent("#member-login").length==0) {
                $("#member-login").removeClass("menu-open");
                $("#member-login-menue").hide();
            }
        });            

	},
	
	search:function() {
		
		$('#search input').focus(function() {
			$(this).css({'background-position':'-280px -28px'});			
			$(this).prev('label').css({'left':'-9999px'});
		});
		
		$('#search input').blur(function() {
			$(this).css({'background-position':'-280px 0'});
			if ($(this).val() == '')
				$(this).prev('label').css({'left':'5px'});
		});
		
	},
	
	featureFader:function() {
		$('#user_interaction').cycle({
			fx: 'fade', 
			/* pager: '#pagination', */
			timeout: 5000,
			pause:   1,
			next: '#next2',
			prev: '#prev2'
		});
	},
	
	providerSlider:function() {
		$('#providers-carousel ul').cycle({
			fx: 'scrollLeft', 
			/* pager: '#pagination', */
			timeout: 5000,
			pause:   1,
			speed:   500,
			next: '#next3',
			prev: '#prev3'
		});
	},
	
	print:function() {
		
		$('#print-page').click(function(){
			window.print();
		});
		
	},
	
	externalLinks:function() {
	
		var extLinks = $('a.external');
			if ( extLinks.length ) {
				extLinks.each(function() { 
					$(this).attr('target', '_blank');
			});
		}
	
	},
	
	fancyBoxInit:function(){

		$("a[rel=gallery]").fancybox({
			'titleShow'			: 'False',
			'overlayColor'		: '#000000',
			'overlayOpacity'	: '.7'
		});
	}

};