/*!
 * jQuery each2 - v0.1 - 8/02/2010
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
  
  var jq = $([]);
  
  $.fn.each2 = function( fn ) {
    var i = -1;
    while ( ( jq[0] = this[++i] ) && fn.call( jq[0], i, jq ) !== false ) {}
    return this;
  };
  
})(jQuery);
