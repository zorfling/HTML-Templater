$(document).ready(function(){
	
    Site.init();
		
	Shadowbox.init({
	    overlayOpacity: 0.8,
	   	players:	["html"],
	   	flv: ['flv','mp4']
	}, setupShadowbox);
	
});

function setupShadowbox() {

    Shadowbox.setup("a.test-gallery", {
        gallery:        "Gallery",
        continuous:     true,
        counterType:    "skip"
    });
    
    Shadowbox.setup('a[title="vimeo-video-1"]', {
        height:     360,
        width:      640,
        flashVars:  {
            clip_id:    "1893986",
            autoplay:   "1"
        }
    });


}

var Site = {
	
	init:function() {
		
				
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
	
	}

};