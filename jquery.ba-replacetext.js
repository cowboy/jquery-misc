/*!
 * jQuery replaceText - v1.0 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery replaceText: String replace for your jQueries!
//
// *Version: 1.0, Last updated: 11/21/2009*
// 
// Project Home - http://benalman.com/projects/jquery-replacetext-plugin/
// GitHub       - http://github.com/cowboy/jquery-misc/
// Source       - http://github.com/cowboy/jquery-misc/raw/master/jquery.ba-replacetext.js
// (Minified)   - http://github.com/cowboy/jquery-misc/raw/master/jquery.ba-replacetext.min.js (0.7kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates one way
// in which this plugin can be used.
// 
// replaceText - http://benalman.com/code/projects/jquery-misc/examples/replacetext/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, and what browsers it has been tested in.
// 
// jQuery Versions - 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 3-3.5, Safari 3-4, Chrome, Opera 9.6-10.
// 
// About: Release History
// 
// 1.0 - (11/21/2009) Initial release

(function($,FALSE,undefined){
  
  // Method: jQuery.fn.replaceText
  // 
  // Replace text recursively through the DOM, starting at a specific element.
  // In cases where text is converted to or wrapped in HTML tags, the resulting
  // text can be optionally rendered as full HTML. Note that only text content
  // will be modified, leaving all tags and attributes untouched.
  // 
  // Uses the String prototype replace method, full documentation on that method
  // can be found here: 
  // 
  // https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Objects/String/Replace
  // 
  // Usage:
  // 
  // > jQuery('selector').replaceText( search, replace [, filter ] [, parse_html ] );
  // 
  // Arguments:
  // 
  //  search - (RegExp|String) A RegExp object or substring to be replaced.
  //    Because the String prototype replace method is used internally, this
  //    argument should be specified accordingly.
  //  replace - (String|Function) The String that replaces the substring received
  //    from the search argument, or a function to be invoked to create the new
  //    substring. Because the String prototype replace method is used internally,
  //    this argument should be specified accordingly.
  //  filter - (Function) If specified, this optional function will be called
  //    for each node iterated over. If the function returns false, that node
  //    is skipped. In this callback, `this` is the current node, and the single
  //    argument passed is the value of the parse_html argument.
  //  parse_html - (Boolean) If true, any new HTML generated as a result of the
  //    string replacement will be rendered as full HTML, otherwise it will just
  //    be replaced as text. Defaults to false.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  // 
  // An example "filter" callback:
  // 
  // By default, if filter is not specified, all elements will have their text
  // replaced. When parse_html is set to true, however, this may have unintended
  // results on TEXTAREA, PRE and CODE elements. This example filter callback
  // will skip those elements when parse_html is set to true.
  // 
  // > function filter( parse_html ) {
  // >   if ( parse_html && /^(?:textarea|pre|code)$/i.test( this.nodeName ) ) {
  // >     return false;
  // >   }
  // > };
  
  $.fn.replaceText = function( search, replace, filter, parse_html ) {
    
    if ( !$.isFunction( filter ) ) {
      parse_html = filter;
      filter = undefined;
    }
    
    return this.each(function(){
      
      // Nodes-to-be-removed-later.
      var remove = [];
      
      // Walk the dom, executing this callback on every node.
      walk_dom( this, function( node ) {
        
        if ( filter && filter.call( node, parse_html ) === FALSE ) { return FALSE; }
        
        var val = node.nodeValue,
          new_val;
        
        // Is node TEXT?
        if ( node.nodeType === 3 ) {
          
          // Perform the replace on the value.
          new_val = val.replace( search, replace );
          
          // Only replace if the new and old values differ!
          if ( new_val !== val ) {
            
            if ( parse_html ) {
              // Parsing HTML, so the TEXT node must be replaced with new nodes.
              // Using jQuery makes this much easier than dealing with IE's
              // leading innerHTML leading-whitespace issues!
              $(node).before( new_val );
              
              // Save a reference to the original node for later removal. If
              // deleted now, walk_dom will lose its place!
              remove.push( node );
            } else {
              // Not parsing HTML, so the TEXT node will just be updated.
              node.nodeValue = new_val;
            }
            
          }
        }
      });
      
      // Remove those nodes-to-be-removed-later now.
      $(remove).remove();
    });
  };
  
  // A simple, small, non-recursive DOM walking function.
  function walk_dom( node, callback ) {
    var cur = node, skip, temp;
    do {
      skip = !skip && ( temp = cur.firstChild ) || ( temp = cur.nextSibling )
        ? callback( cur = temp ) === FALSE
        : cur = cur.parentNode;
    } while ( cur !== node );
  };
  
})(jQuery,!1);
