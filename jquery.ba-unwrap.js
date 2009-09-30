/*!
 * unwrap - v0.2 - 9/30/2009
 * http://benalman.com/projects/jquery-unwrap-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */

jQuery.fn.unwrap = function() {
  return this.parent().each(function( n, elem ){
    jQuery.nodeName( elem, 'body' ) || jQuery( elem ).replaceWith( elem.childNodes );
  }).end();
};
