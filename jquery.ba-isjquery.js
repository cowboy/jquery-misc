/*!
 * jQuery isjQuery - v0.3 - 1/21/2010
 * http://benalman.com/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($,isjQuery,func){
  '$:nomunge'; // Used by YUI compressor.
  
  $[isjQuery] = $.fn[isjQuery] = func = function( obj ){
    return !!obj && obj[isjQuery] === func;
  };
  
})(jQuery,'isjQuery');