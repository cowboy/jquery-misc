/*!
 * jQuery queueFn - v0.6 - 06/21/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  $.fn.queueFn = function( fn ) {
    var args = Array.prototype.slice.call( arguments, 1 );
    
    fn = $.isFunction( fn ) ? fn : $.fn[ fn ];
    
    return this.queue(function(){
      fn.apply( $(this), args );
      $.dequeue( this );
    });
  };
  
})(jQuery);
