/*!
* jQuery selectColorize - v0.2 - 3/8/2010
* http://benalman.com/projects/jquery-misc-plugins/
*
* Copyright (c) 2010 "Cowboy" Ben Alman
* Dual licensed under the MIT and GPL licenses.
* http://benalman.com/about/license/
*/

(function($,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  // Some reused strings.
  var selectColorize = 'selectColorize',
    event_name = 'change.' + selectColorize,
    style = 'style',
    color = 'color',
    backgroundColor = 'backgroundColor';
  
  $.fn[ selectColorize ] = function( destroy ) {
    // Unbind event.
    var that = this.unbind( event_name );
    
    // Initialize or destroy.
    that.each(function(){
      var select = $(this),
        
        // These colors may need to be set on options.
        select_color = select.css( color ),
        select_backgroundColor = select.css( backgroundColor );
      
      if ( destroy !== undefined ) {
        
        // Cleanup select and all options.
        select.find('option').andSelf().each(function(){
          var elem = $(this),
            data = elem.data( selectColorize );
          
          // Revert the element style attribute back to its original state.
          data && elem[ data[ style ] ? 'attr' : 'removeAttr' ]( style, data[ style ] );
          
          // Remove any stored data.
          elem.removeData( selectColorize );
        });
        
      } else if ( !select.data( selectColorize ) ) {
        
        // Store select style attribute for later cleanup.
        select.data( selectColorize, { style: select.attr( style ) } );
        
        // For each option that doesn't have an inline color or backgroundColor,
        // set its color and backgroundColor to the select's.
        select.find('option').each(function(){
          var option = $(this),
            opt_style = this.style;
          
          // Store option style attribute for later cleanup.
          option.data( selectColorize, { style: option.attr( style ) } );
          
          // Update the option's color and backgroundColor with that of the
          // select's if they are unspecified.
          opt_style[ color ] || option.css( color, select_color );
          opt_style[ backgroundColor ] || option.css( backgroundColor, select_backgroundColor );
        });
      }
    });
    
    if ( destroy === undefined ) {
      
      // Bind event.
      that
        .bind( event_name, function(){
          var select = $(this),
            
            // Get the selected option.
            option = select.find( 'option:selected' ),
            
            // This object will hold the CSS properties.
            css = {},
            
            bg_color;
          
          // Change the select's color to that of its selected option. If the
          // option has no inline style color set, use the default color.
          if ( option.length ) {
            css[ color ] = option.css( color );
            
            // WebKit won't colorize a select if the background is solid white,
            // go figure.
            bg_color = option.css( backgroundColor );
            css[ backgroundColor ] = bg_color === 'rgb(255, 255, 255)' ? '#fffffe' : bg_color;
            
            select.css( css );
          }
        })
        .triggerHandler( event_name );
    }
    
    return that;
  };
  
})(jQuery);
