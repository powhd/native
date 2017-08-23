let display_time = 100;
(function($) {
	$.fn.write = function() {
		this.each(function() {
			var $el = $(this), str = $el.html(), cur_idx = 0;
			var timer = setInterval(function() {
				var current = str.substr(cur_idx, 1);
				if (current == '<') {
					cur_idx = str.indexOf('>', cur_idx) + 1;
				} else {
					cur_idx++;
				}
				$el.html(str.substring(0, cur_idx) + (cur_idx & 1 ? '_' : ''));
				if (cur_idx >= str.length) {
					clearInterval(timer);
				}
			}, display_time);
		});
		return this;
	};
})($);


