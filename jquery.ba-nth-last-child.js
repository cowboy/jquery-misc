/*!
 * nth-last-child - v0.1 - 5/5/2009
 * http://benalman.com/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */

(function($) {
  '$:nomunge'; // Used by YUI compressor.
  
  $.expr[':']['nth-last-child'] = function( elem, i, match ) {
    var count = 0,
      node = elem.parentNode.firstChild;
    
    if ( elem.nodeIndex ) {
      count = $.sibling( node, elem ).length;
    } else {
      do {
        if ( node && node.nodeType === 1 ) {
          node.nodeIndex = ++count;
        }
      } while ( node = node.nextSibling );
    }
    
    return elem.nodeIndex === count + 2 - (match[3] || 0); 
  };
  
})(jQuery);

// About:
// 
// Like :nth-child(N) but counts from the end, not the beginning.
// 
// Sample Usage:
// 
// $('ul li:nth-last-child(2)').addClass( 'penultimate-listitem' );
