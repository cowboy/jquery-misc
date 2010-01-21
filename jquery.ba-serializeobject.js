/*!
 * jQuery serializeObject - v0.2 - 1/20/2010
 * http://benalman.com/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Whereas .serializeArray() serializes a form into an array,
// .serializeObject() serializes a form into an (arguably more
// useful) object.

(function($,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  $.fn.serializeObject = function(){
    var obj = {};
    
    $.each( this.serializeArray(), function(i,o){
      var n = o.name,
        v = o.value;
        
        obj[n] = obj[n] === undefined ? v
          : $.isArray( obj[n] ) ? obj[n].concat( v )
          : [ obj[n], v ];
    });
    
    return obj;
  };
  
})(jQuery);

/*

$('<form><input type="hidden" name="a" value="1"/><input type="hidden" name="a" value="2"/><input type="hidden" name="a" value="3"/><input type="hidden" name="b" value="4"/></form>').serializeObject();

// returns { a: [ "1", "2", "3" ], b: "4" }

*/
