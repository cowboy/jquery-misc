/*!
 * jQuery loadAdScript - v1.0 - 3/2/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  // A few references.
  var doc = document,
    write = doc.write,
    
    // Create queue.
    q = $.jqmq({
      
      // Only iterate when q.next() is called.
      delay: -1,
      
      // For each queue item, do this.
      callback: function( item ) {
        
        // Override document.write.
        doc.write = function( html ) {
          item.elems.append( html );
        };
        
        // Get script
        $.getScript( item.url, function(){
          
          // Execute callback if specified.
          item.callback && item.callback.call( item.elems );
          
          // Process next queue item, if exists.
          q.next();
        });
      },
      
      // When the queue completes, set document.write back.
      complete: function(){
        doc.write = write;
      }
    });
  
  // The plugin method.
  $.fn.loadAdScript = function( url, callback ) {
    
    // Add this to the queue.
    q.add({
      elems: this,
      url: url,
      callback: callback
    });
    
    return this;
  };
  
})(jQuery);
