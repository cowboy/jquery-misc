/*!
 * jQuery peenMeter: Eight Equals Equals Dee - v1.0 - 2/19/2010
 * http://peenmeter.com/
 * 
 * Copyright (c) 2010 "Boycow" Ben Analman
 * Dual licensed under the MIT and GPL licenses.
 */

(function($){
  var _html,
    jq_peenMeterHTML;
  
  // Change the default peenMeter HTML.
  $.peenMeterHTML = jq_peenMeterHTML = function( html ) {
    _html = html;
  };
  
  // Set the default HTML to something.. useful.
  jq_peenMeterHTML(
      '<span class="peen">'
    + '<span class="balls">8</span>'
    + '<span class="shaft">=</span>'
    + '<span class="head">D</span>'
    + '<span class="jizz">~</span>'
    + '<span class="pct"></span>'
    + '</span>'
  );
  
  // Create a new peenMeter in one or more elements. `percent` is a number
  // between 0 and 100 inclusive, and `html` is optional, use it only if you
  // need to override the default HTML.
  $.fn.peenMeter = function( percent, html ) {
    
    percent = isNaN( percent ) ? 0 : parseInt( Math.max( 0, Math.min( 100, percent ) ) );
    html = html || _html;
    
    return this.each(function(){
      var vaJJ     = $(this),
        erect      = vaJJ.html('').width(),
        peen       = $(html).css( 'white-space', 'pre' ).appendTo( vaJJ ),
        shaft      = peen.children('.shaft'),
        jizz       = peen.children('.jizz'),
        pct        = peen.children('.pct'),
        shaft_unit = shaft.html(),
        jizz_unit  = jizz.html(),
        shaft_width,
        jizz_width;
      
      function holmes() {
        return peen.width();
      };
      
      function stroke( len ) {
        shaft.html( wank( shaft_unit, len ) );
      };
      
      function cum( len ) {
        jizz.html( wank( jizz_unit, len ) );
      };
      
      function flaccid() {
        stroke();
        cum();
      };
      
      pct.html( percent + '%' );
      
      flaccid();
      
      shaft_width = -holmes();
      stroke( 1 );
      shaft_width += holmes();
      
      jizz_width = -holmes();
      cum( 1 );
      jizz_width += holmes();
      
      flaccid();
      
      stroke( ( erect - holmes() ) * percent / 100 / shaft_width );
      cum( ( erect - holmes() ) / jizz_width );
    });
  };
  
  function wank( str, num ) {
    return Array( parseInt( isNaN( num ) ? 0 : Math.max( 0, num ) ) + 1 ).join( str );
  };
  
})(jQuery);
