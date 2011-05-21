/**
 * Text Resizzle	
 * For resizing text by attaching specific classes to a parent element. 
 * For more information, demos etc, see the page in confluence. 
 * @author Henry Singleton
 * @date Nov 3 2010
 */

(function($) {
	$.fn.textResizzle = function(options) {
		
		var settings = {
			parent: '#primary',				// select the parent to apply the size classes to
			increaseSizeSelector: '.text-increase', // select element to use for increase font size button or link. 
			decreaseSizeSelector: '.text-decrease', // select element to use for decrease font size button or link. 
			sizes: [					// specify an array of the sizes. These will be applied as class names to the parent element (selected above) to allow you to overide layout and font sizes. 
				'normal',
				'large',
				'largest'
			],
			defaultSize: 'normal', 		// specify which size above is the default. 
			saveCookie: true,			// choose weather to save the selected font size in a cookie
			cookieName: 'textResizzle'
		};
		
		if (options) {
			$.extend(settings,options);
		}
		
		//set the default size
		var currentSize = settings.defaultSize;
		
		//set up our container
		var parent = $(settings.parent);
			
		// set up the increase and decrease selectors
		
		$(settings.increaseSizeSelector).click(increaseSize);
		$(settings.decreaseSizeSelector).click(decreaseSize);
			
		//set the size to whatever is stored in the current cookie
		if ($.cookies.get(settings.cookieName)) {
			setSize($.cookies.get(settings.cookieName));
		}

		function increaseSize() {
			
			/* alert(jQuery.inArray(currentSize, settings.sizes)); */
			//get the next size up index
			var nextSize = jQuery.inArray(currentSize, settings.sizes) + 1;
	
			//check if we have reached the top of the sizing.
			if (nextSize >= settings.sizes.length) {
				return false;
			}
			
			//set the new size
			setSize(settings.sizes[nextSize]);
			
			return false;
		}
		
		function decreaseSize() {
			//get the next size up index
			var previousSize = jQuery.inArray(currentSize, settings.sizes) - 1;
	
			//check if we have reached the top of the sizing.
			if (previousSize < 0) {
				return false;
			}
			
			//set the new size
			setSize(settings.sizes[previousSize]);
			
			return false;
	
		}
		
		//explicitly set the size. Will normally only be called internally. 
		function setSize(size) {
			
			if (typeof size == undefined) {
				size = settings.defaultSize;
			}
			
			parent.removeClass(currentSize);
			
			//set the new size
			parent.addClass(size);
			
			//write the new size to the current object
			currentSize = size;
			
			//write the change to the cookie
			if (settings.saveCookie) {
				$.cookies.set(settings.cookieName, size, { path: '/'});
			}
			
			//Cufon.refresh();
		}
		
		return this;
	}	
})(jQuery);