/*!
 * getClassData - v1.1 - 3/30/2009
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// If you're not yet using HTML 5 data- attributes, you can store basic data
// in an element's class attribute for easy retrieval. Just give each datum a
// prefix, which you can then use to select it.
// 
// Note: data can't contain spaces, and prefix is case-sensitive.

(function($) {
  '$:nomunge'; // Used by YUI compressor.
  
  var jq_getClassData,
    str_getClassData = 'getClassData';
  
  $[ str_getClassData ] = jq_getClassData = function( class_string, prefix, delimiter ) {
    var re,
      arr,
      data = [];
    
    delimiter = delimiter || '-';
    
    re = new RegExp( '(?:^|\\s)' + prefix + delimiter + '(\\S+)', 'g' );
    while ( arr = re.exec(class_string) ) {
      data.push( arr[1] );
    }
    
    return data.join(' ');
  };
  
  $.fn[ str_getClassData ] = function( prefix, delimiter ) {
    return jq_getClassData( $(this).attr('class'), prefix, delimiter );
  };
  
})(jQuery);
