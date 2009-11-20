/*!
 * jQuery domReplace - v1.0 - 11/19/2009
 * http://benalman.com/projects/jquery-domreplace-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery domReplace: Replace text recursively through the DOM
//
// *Version: 1.0, Last updated: 11/19/2009*
// 
// Project Home - http://benalman.com/projects/jquery-domreplace-plugin/
// GitHub       - http://github.com/cowboy/jquery-misc/
// Source       - http://github.com/cowboy/jquery-misc/raw/master/jquery.ba-domreplace.js
// (Minified)   - http://github.com/cowboy/jquery-misc/raw/master/jquery.ba-domreplace.min.js (0.7kb)
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
// domReplace - http://benalman.com/code/projects/jquery-misc/examples/domreplace/
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
// 1.0 - (11/19/2009) Initial release

// Section: jQuery is actually optional.
// 
// Method: domReplace
// 
// Replace text recursively through the DOM, starting at a specific element. In
// the case where text is converted to or wrapped in HTML tags, the resultant
// text can be optionally rendered as full HTML. Only text content will be
// modified, leaving all tags and attributes untouched.
// 
// Uses the String prototype replace method, full documentation on that method
// can be found here: 
// 
// https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Objects/String/Replace
// 
// Usage:
// 
// > domReplace( parent, search, replace [, filter ] [, parse_html ] );
// 
// Arguments:
// 
//  parent - (Node) A DOM node in which to replace text.
//  search - (RegExp|String) A RegExp object or substring to be replaced.
//    Because the String prototype replace method is used internally, this
//    argument should be specified accordingly.
//  replace - (String|Function) The String that replaces the substring received
//    from the search argument, or a function to be invoked to create the new
//    substring. Because the String prototype replace method is used internally,
//    this argument should be specified accordingly.
//  filter - (Function) If specified, this optional function will be called for
//    each text node to be processed. If the function returns false, that node
//    is skipped. The arguments passed are: parent_node, current_node, and depth,
//    where depth is the current number of levels of recursion.
//  parse_html - (Boolean) If true, any new HTML generated as a result of the
//    string replacement will be promoted to full HTML, otherwise it will just
//    be replaced as text. Defaults to false.
// 
// Returns:
// 
//  Nothing.

window.domReplace = (function(){
  
  var elem;
  
  return function( parent, search, replace, filter, parse_html, depth ) {
    
    var children = parent.childNodes,
      i = children.length,
      child,
      html;
    
    depth = depth || 0;
    
    if ( typeof filter === 'boolean' ) {
      parse_html = filter;
      filter = null;
    }
    
    while( --i >= 0 ) {
      child = children[ i ];
      
      if ( child.nodeType === 3 && ( !filter || filter( parent, child, depth ) !== false ) ) {
        html = child.nodeValue.replace( search, replace );
        
        if ( html !== child.nodeValue ) {
          
          if ( parse_html ) {
            
            elem = elem || document.createElement('b');
            elem.innerHTML = html;
            
            while ( elem_child = elem.firstChild ) {
              parent.insertBefore( elem_child, child );
            }
            parent.removeChild( child );
            
          } else {
            child.nodeValue = html;
          }
        }
      } else {
        domReplace( child, search, replace, filter, parse_html, depth + 1 );
      }
    }
  };
  
})();

// Section: But for the jQuery crowd..
// 
// Method: jQuery.fn.domReplace
// 
// Replace text recursively through the DOM, starting at a specific element. In
// the case where text is converted to or wrapped in HTML tags, the resultant
// text can be optionally rendered as full HTML. Only text content will be
// modified, leaving all tags and attributes untouched.
// 
// Uses the String prototype replace method, full documentation on that method
// can be found here: 
// 
// https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Objects/String/Replace
// 
// Usage:
// 
// > jQuery('selector').domReplace( search, replace [, filter ] [, parse_html ] );
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
//  filter - (Function) If specified, this optional function will be called for
//    each text node to be processed. If the function returns false, that node
//    is skipped. The arguments passed are: parent_node, current_node, and depth,
//    where depth is the current number of levels of recursion.
//  parse_html - (Boolean) If true, any new HTML generated as a result of the
//    string replacement will be promoted to full HTML, otherwise it will just
//    be replaced as text. Defaults to false.
// 
// Returns:
// 
//  (jQuery) The initial jQuery collection of elements.

if ( window.jQuery ) {
  
  jQuery.fn.domReplace = function( search, replace, parse_html ) {
    return this.each(function(){
      domReplace( this, search, replace, parse_html );
    });
  };
  
}
