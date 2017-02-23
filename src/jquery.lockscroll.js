/*
 *  jQuery BlockScroll - v1.0.0
 *  Lock the scroll of a element and freeze in the actual position.
 *  https://github.com/edpittol/jquery-lockscroll
 *
 *  Made by Eduardo Pittol
 *  Under MIT License
 */
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
