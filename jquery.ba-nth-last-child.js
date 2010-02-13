/*!
 * jQuery :nth-last-child - v0.2 - 2/13/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($) {
  '$:nomunge'; // Used by YUI compressor.
  
  // In Sizzle, Sizzle.selectors.match.CHILD could be this RegExp, and with some
  // minor $.expr.filter.CHILD tweaks, this whole plugin could be obviated.
  // /:(only|nth(?:-last)?|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/
  
  var re_match = /:(nth)-last-child(?:\((even|odd|[\dn+-]*)\))?/,
    
    // Method / object references.
    jq_expr = $.expr,
    jq_expr_filter_CHILD = jq_expr.filter.CHILD;
  
  jq_expr[':']['nth-last-child'] = function( elem, i, match, array ) {
    
    // Get array for $.expr.preFilter.CHILD based on match RegExp.
    var matches = match[0].match( re_match ),
      children = $(elem.parentNode).children(),
      counterpart_elem;
    
    // Convert number/equation into array for $.expr.filter.CHILD.
    matches = jq_expr.preFilter.CHILD( matches );
    
    // This doesn't return anything meaningful, since it's geared entirely
    // toward 'nth' instead of 'nth-last', BUT it does set node.nodeIndex on
    // elem and all siblings if that property hasn't already been set.
    jq_expr_filter_CHILD( elem, matches );
    
    // Since $.expr.filter.CHILD is only concerned with the position of the
    // element in question, find the counterpart element that is elem's index
    // from the end.
    counterpart_elem = children.eq( children.length - elem.nodeIndex )[0];
    
    // Now, return the meaningful result.
    return jq_expr_filter_CHILD( counterpart_elem, matches );
  };
  
})(jQuery);
