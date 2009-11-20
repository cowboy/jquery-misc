/*!
 * untils: nextUntil, prevUntil, parentsUntil - v1.0pre - 11/12/2009
 * http://benalman.com/projects/jquery-untils-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: untils: nextUntil, prevUntil, parentsUntil
//
// *Version: v1.0pre, Last updated: 11/12/2009*
// 
// Project Home - http://benalman.com/projects/jquery-untils-plugin/
// GitHub       - http://github.com/cowboy/jquery-misc/
// Source       - http://github.com/cowboy/jquery-misc/raw/master/jquery.ba-untils.js
// (Minified)   - http://github.com/cowboy/jquery-misc/raw/master/jquery.ba-untils.min.js (0.5kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Example
// 
// This working example, complete with fully commented code, illustrates one way
// in which this plugin can be used.
// 
// Untils - http://benalman.com/code/projects/jquery-misc/examples/untils/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.7, Safari 3-4, Chrome, Opera 9.6-10.
// Unit Tests      - http://benalman.com/code/projects/jquery-misc/unit/
// 
// About: Release History
// 
// 1.0pre - (11/12/2009) Pre-Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  $.each({
    
    // These three methods use jQuery.dir internally, so it makes sense for them
    // to have an "until" mode.
    
    // Method: jQuery.fn.nextUntil
    // 
    // From the selected element(s), get all "next" elements until an "ending"
    // element is reached. The "ending" element is not included in the final
    // collection of elements, which is uniqued and returned in "traversal"
    // order.
    // 
    // Usage:
    // 
    // > jQuery('selector').nextUntil( until_sel [, each_sel ] );
    // 
    // Arguments:
    // 
    //  until_sel - (String) A jQuery selector that matches the "ending"
    //    element. Only elements preceding the first element matching this
    //    selector will be returned.
    //  each_sel - (String) An optional jQuery selector that filters each
    //    element that is iterated over. Excluding this argument is the same as
    //    specifying "*".
    // 
    // Returns:
    // 
    //  (jQuery) A filtered jQuery collection of elements, returned in
    //  "traversal" order.
    
    nextUntil: 'nextAll',
    
    // Method: jQuery.fn.prevUntil
    // 
    // From the selected element(s), get all "prev" elements until an "ending"
    // element is reached. The "ending" element is not included in the final
    // collection of elements, which is uniqued and returned in "traversal"
    // order.
    // 
    // Usage:
    // 
    // > jQuery('selector').prevUntil( until_sel [, each_sel ] );
    // 
    // Arguments:
    // 
    //  until_sel - (String) A jQuery selector that matches the "ending"
    //    element. Only elements preceding the first element matching this
    //    selector will be returned.
    //  each_sel - (String) An optional jQuery selector that filters each
    //    element that is iterated over. Excluding this argument is the same as
    //    specifying "*".
    // 
    // Returns:
    // 
    //  (jQuery) A filtered jQuery collection of elements, returned in
    //  "traversal" order.
    
    prevUntil: 'prevAll',
    
    // Method: jQuery.fn.parentsUntil
    // 
    // From the selected element(s), get all "parent" elements until an "ending"
    // element is reached. The "ending" element is not included in the final
    // collection of elements, which is uniqued and returned in "traversal"
    // order.
    // 
    // Usage:
    // 
    // > jQuery('selector').parentsUntil( until_sel [, each_sel ] );
    // 
    // Arguments:
    // 
    //  until_sel - (String) A jQuery selector that matches the "ending"
    //    element. Only elements preceding the first element matching this
    //    selector will be returned.
    //  each_sel - (String) An optional jQuery selector that filters each
    //    element that is iterated over. Excluding this argument is the same as
    //    specifying "*".
    // 
    // Returns:
    // 
    //  (jQuery) A filtered jQuery collection of elements, returned in
    //  "traversal" order.
    
    parentsUntil: 'parents'
    
  }, function( name, method ){
    
    $.fn[ name ] = function( until_selector, each_selector ) {
      
      // Store elements "for later".
      var elems = [];
      
      // For each element passed in..
      this.each(function(){
        
        // ..get all elements (or those matching each_selector)..
        return $(this)[ method ]( each_selector ).each(function(){
          
          // ..and store them "for later", until the end element is reached.
          return $(this).is( until_selector )
            ? false
            : elems.push( this );
        });
      });
      
      // Return a uniqued collection of the "stored for later" elements, which
      // can be reverted by using .end().
      return this.pushStack( $.unique( elems ), name, until_selector + ( each_selector ? ',' + each_selector : '' ) );
      
    };
    
  });
  
})(jQuery);
