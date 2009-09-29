/*!
 * nextUntil - v1.0 - 7/30/2009
 * http://benalman.com/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */

jQuery.fn.nextUntil = function( expr ) {
  var elems = [];
  
  this.nextAll().each(function(){
    return jQuery(this).is( expr )
      ? false
      : elems.push( this );
  });
  
  return this.pushStack( elems, 'nextUntil', expr );
};
