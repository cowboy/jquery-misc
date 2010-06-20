/*!
 * jQuery queueFn - v0.4 - 06/18/2010
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
    
    return this.queue(function(next){
      fn.apply( $(this), args );
      next();
    });
  };
  
})(jQuery);

// Usage:
// 
// Remove an element from the DOM after fading out.
// 
// $('#foo').fadeOut().queueFn( 'remove' );
// 
// 
// Add "fading" class to en element, but only while it's fading in.
// 
// $('#bar')
//   .hide()
//   .addClass( 'fading' )
//   .fadeIn()
//   .queueFn( 'removeClass', 'fading' );
// 
// 
// Change color of an element (in slightly different ways) between fades, then
// remove the element if some_condition is true.
// 
// $('a:first')
//   .fadeOut()
//   .queueFn( 'css', { color: 'orange' } )
//   .fadeIn()
//   .queueFn( 'css', 'color', 'red' )
//   .fadeOut()
//   .queueFn(function(){
//     if ( some_condition ) {
//       $(this).remove();
//     }
//   });
