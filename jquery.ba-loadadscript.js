/*!
 * jQuery loadAdScript - v1.1 - 7/12/2010
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
    writeln = doc.writeln,
    
    // Create queue.
    q = $.jqmq({
      
      // Only iterate when q.next() is called.
      delay: -1,
      
      // For each queue item, do this.
      callback: function( item ) {
        
        // Override document.write and .writeln. Do we care that .writeln
        // should append a newline character? Probably not.
        doc.write = doc.writeln = function( html ) {
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
      
      // When the queue completes, set document.write and .writeln back.
      complete: function(){
        doc.write = write;
        doc.writeln = writeln;
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
