/*!
 * iff - v0.2 - 6/3/2009
 * http://benalman.com/projects/jquery-iff-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */

jQuery.fn.iff = function( test ) {
  var elems = !test || jQuery.isFunction( test )
    && !test.apply( this, Array.prototype.slice.call(arguments, 1) )
    ? []
    : this;
  return this.pushStack( elems, 'iff', test );
};

