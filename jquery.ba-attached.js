/*!
 * jQuery :attached, :detached - v1.1 - 2/13/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Selectors that match elements currently attached to or detached from the DOM.

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  $.extend( $.expr[':'], {
    attached: attached,
    detached: function( elem ){ return !attached( elem ); }
  });
  
  function attached( elem ) {
    var contains = $.contains,
      documentElement = document.documentElement;
    
    // jQuery 1.4+
    if ( contains ) {
      return contains( documentElement, elem );
    }
    
    // jQuery 1.3.2
    while ( elem = elem.parentNode ) {
      if ( elem === documentElement ) {
        return true;
      }
    }
    return false;
  };
  
})(jQuery);
