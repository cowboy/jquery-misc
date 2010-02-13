/*!
 * jQuery throttle - v0.1 - 2/12/2010
 * http://benalman.com/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function(window,undefined){
  
  // Since jQuery really isn't required for this plugin, use `jQuery` as the
  // namespace only if it already exists, otherwise use the `Cowboy` namespace,
  // creating it if necessary.
  var $ = window.jQuery || window.Cowboy || ( window.Cowboy = {} );
  
  $.throttle = function( delay, callback ) {
    var timeout_id,
      last_updated = 0;
    
    if ( callback === undefined ) {
      callback = delay;
      delay = 0;
    }
    
    return function() {
      var now = +new Date,
        that = this,
        args = arguments;
      
      function func() {
        callback.apply( that, args );
      };
      
      if ( now - last_updated > delay ) {
        last_updated = now;
        func();
      } else {
        timeout_id && clearTimeout( timeout_id );
        timeout_id = setTimeout( func, delay );
      }
    };
  };
  
})(this);
