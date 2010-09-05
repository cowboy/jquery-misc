/*!
 * jQuery queueFn - v0.7 - 9/05/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  $.fn.queueFn = function( fn ) {
    var i,
      that,
      args = Array.prototype.slice.call( arguments, 1 );
    
    if ( typeof fn === 'boolean' ) {
      if ( fn ) {
        that = this;
        i = this.length;
      }
      fn = args.shift();
    }
    
    fn = $.isFunction( fn ) ? fn : $.fn[ fn ];
    
    return this.queue(function(){
      !--i && fn.apply( that || this, args );
      $.dequeue( this );
    });
  };
  
})(jQuery);
