/*! jQuery LockScroll - v1.0.0 - 2017-02-23
* https://github.com/edpittol/jquery-lockscroll
* Copyright (c) 2017 Eduardo Pittol; Licensed MIT */
;(function ( $, window, document, undefined ) {
	$.fn.lockScroll = function(lock) {
		if('undefined' === typeof lock) {
			lock = true;
		}

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

	$.lockScroll = function(lock) {
		$(window).lockScroll(lock);
	};

})( jQuery, window, document );
