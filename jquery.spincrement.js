/**
 * jQuery Spincrement plugin
 * 
 * Plugin structure based on: http://blog.jeremymartin.name/2008/02/building-your-first-jquery-plugin-that.html
 * Leveraging of jQuery animate() based on: http://www.bennadel.com/blog/2007-Using-jQuery-s-animate-Method-To-Power-Easing-Based-Iteration.htm
 * Easing function from jQuery Easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
 * Thousands separator code: http://www.webmasterworld.com/forum91/8.htm
 * 
 * @author John J. Camilleri
 * @version 0.1
 */

(function($){

	// Custom easing function
	$.extend( $.easing, {
		// This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
		spincrementEasing: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		}
	});
 
	// Spincrement function
	$.fn.spincrement = function(opts) {
	
		// Default values
		var defaults = {
			from: 0,
			to: false,
			decimalPlaces: 0,
			decimalPoint: '.',
			thousandSeparator: ',',
			duration: 1000, // ms; TOTAL length animation
			leeway: 50, // percent of duraion
			easing: 'spincrementEasing',
			fade: true
		};
		var options = $.extend(defaults, opts);
		
		// Function for formatting number
		var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
		function format(num) {
			num = num.toFixed(options.decimalPlaces); // converts to string!
			
			// Non "." decimal point
			if ( (options.decimalPlaces > 0) && (options.decimalPoint != '.') ) {
				num = num.replace('.', options.decimalPoint);
			}
			
			// Thousands separator
			if (options.thousandSeparator) {
				while(re_thouSep.test(num)) {
					num = num.replace(re_thouSep, '$1'+options.thousandSeparator+'$2');
				}
			}
			return num;
		}
	
		// Apply to each matching item
		return this.each(function() {
		
			// Get handle on current obj
			var obj = $(this);
			
			// Set params FOR THIS ELEM
			var from = options.from;
			var to = (options.to != false) ? options.to : parseFloat(obj.html()); // If no to is set, get value from elem itself
			//var to = parseFloat(obj.html()); // If no to is set, get value from elem itself
			var duration = options.duration;
			if (options.leeway) {
				// If leeway is set, randomise duration a little
				duration += Math.round(options.duration * (((Math.random()*2)-1)*(options.leeway)/100));
			}
			
			// DEBUG
			//obj.html(to); return;
			
			// Start
			obj.css('counter', from);
			if (options.fade) obj.css('opacity', 0 );
			obj.animate(
				{ counter: to, opacity: 1 },
				{
					easing: options.easing,
					duration: duration,
					
					// Invoke the callback for each step.
					step: function(progress) {
						obj.css('visibility', 'visible'); // Make sure it's visible
						obj.html(format(progress * to));
					},
					complete: function() {
						// Cleanup
						obj.css('counter', null);
						obj.html(format(to));
					}
				}
			);
		});

	};
})(jQuery);
