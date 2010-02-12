/*!
 * jQuery :attached, :detached - v1.0 - 2/12/2010
 * http://benalman.com/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){
  
  // Usage:
  // 
  // var elem = $('a:first');
  // 
  // elem.is(':attached'); // true
  // elem.is(':detached'); // false
  // 
  // elem.detach();
  // 
  // elem.is(':attached'); // false
  // elem.is(':detached'); // true
  
  $.extend( $.expr[':'], {
    attached: attached,
    detached: function( elem ){ return !attached( elem ); }
  });
  
  function attached( elem ) {
    while ( elem = elem.parentNode ) {
      if ( elem === document.documentElement ) {
        return true;
      }
    }
    return false;
  };
  
})(jQuery);