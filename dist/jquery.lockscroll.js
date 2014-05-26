/*! jQuery LockScroll - v1.0.0 - 2014-05-26
* https://github.com/edpittol/jquery-lockscroll
* Copyright (c) 2014 Eduardo Pittol; Licensed MIT */
;(function ( $, window, document, undefined ) {
	
	$.fn.lockScroll = function(lock) {
		this.each(function() {
			var $element = $(this),
				scrollEvent = "scroll.lockScroll",
				lockedPosition = $element.scrollTop();

			if(lock) {
				$element.on(scrollEvent, function() {
					$element.scrollTop(lockedPosition);
				});
			} else {
				$element.off(scrollEvent);
			}
		});

		return this;
	};

})( jQuery, window, document );