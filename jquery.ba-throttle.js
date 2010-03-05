/*!
 * jQuery throttle - v0.2 - 3/4/2010
 * http://benalman.com/projects/jquery-misc-plugins/
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
    // After throttled has stopped being called, this timeout ensures that
    // `callback` is executed one final time.
    var timeout_id,
      
      // Keep track of the last time `callback` was executed for throttling.
      last_updated = 0;
    
    // This function encapsulates all of the throttling functionality and
    // when executed will limit the rate at which `callback` is executed.
    function throttled() {
      var now = +new Date(),
        that = this,
        args = arguments;
      
      function func() {
        callback.apply( that, args );
      };
      
      if ( now - last_updated > delay ) {
        // `throttled` was called and the throttle time has been exceeded,
        // so store the current time and execute the callback.
        last_updated = now;
        func();
      } else {
        // `throttled` wasn't called, but it's been `delay` ms since the last
        // time, so execute `callback` one last time, for good measure.
        timeout_id && clearTimeout( timeout_id );
        timeout_id = setTimeout( func, delay );
      }
    };
    
    // Set the guid of throttled function to the same of original callback, so
    // it can be removed in jQuery 1.4+ .unbind or .die by using the original
    // callback as a reference.
    if ( $.guid ) {
      throttled.guid = callback.guid = callback.guid || $.guid++;
    }
    
    // Return the throttled function.
    return throttled;
  };
  
})(this);
