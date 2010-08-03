/*!
 * jQuery each2 - v0.2 - 8/02/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Inspired by James Padolsey's quickEach
 * http://gist.github.com/500145
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($) {
  
  // Create a placeholder jQuery object with a length of 1. The single item
  // is completely arbitrary and will be replaced.
  var jq = $([1]);
  
  $.fn.each2 = function( fn ) {
    var i = -1;
    
    while (
      // Set both the first element AND context property of the placeholder
      // jQuery object to the DOM element. When i has been incremented past the
      // end, this[++i] will return undefined and abort the while loop.
      ( jq.context = jq[0] = this[++i] )
      
      // Invoke the callback function in the context of the DOM element,
      // passing both the index and the placeholder jQuery object in. Like
      // .each, if the callback returns `false`, abort the while loop.
      && fn.call( jq[0], i, jq ) !== false
    ) {}
    
    // Return the initial jQuery object for chainability.
    return this;
  };
  
})(jQuery);
