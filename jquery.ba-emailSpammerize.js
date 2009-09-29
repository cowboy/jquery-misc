/*!
 * emailSpammerize - v1.1 - 3/14/2009
 * http://benalman.com/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */

(function($) {
  '$:nomunge'; // Used by YUI compressor.
  
  var str_emailSpammerize = 'emailSpammerize',
    replaces = {
      at: '@', dot: '.', plus: '+', dash: '-', underscore: '_', bang: '!', 
      hash: '#', dollar: '$', percent: '%', ampersand: '&', quote: "'", 
      asterisk: '*', slash: '/', equals: '=', question: '?', caret: '^',  
      backtick: '`', pipe: '|', tilde: '~'
    };
  
  $[ str_emailSpammerize ] = function( email, linkify ) {
    var re;
    
    $.each( replaces, function(k,v){
      re = new RegExp( '\\s+' + k + '\\s+', 'gi' );
      email = email.replace( re, v );
    });
    
    email = email.replace( /(\s+|\[|\])/g, '' );
    
    email = $.map( email, function(v){
      return '&#' + v.charCodeAt() + ';';
    }).join('');
    
    if ( linkify ) {
      email = '<a href="mailto:' + email + '">' + email + '<\/a>';
    }
    
    return email;
  };
  
  $.fn[ str_emailSpammerize ] = function( linkify ) {
    return this.each(function(){
      var email = $(this).text();
      
      $(this).html( $[ str_emailSpammerize ]( email, linkify ) );
    });
  };
  
})(jQuery);

// About:
// 
// "With a little help from Randal Schwartz, who held my nose to the web standards"
// 
// Convert your anti-spammerized links (like "foo at bar dot com") to their
// proper format, which spammers theoretically shouldn't be able to harvest
// since this all happens via JavaScript after page load, and all text is
// encoded into numeric entities. If an email address contains a part that is
// also the name of a replace, like "dot" or "at", just surround it with [].
// 
// Sample Usage:
// 
// Initial HTML:
// <span>foo ampersand bar at example dot com</span>
// 
// $('span').emailSpammerize(true);
// 
// Resulting HTML:
// <span><a href="mailto:&#102;&#111;&#111;&#38;&#98;&#97;&#114;&#64;&#101;
// &#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;">&#102;&#111;
// &#111;&#38;&#98;&#97;&#114;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;
// &#46;&#99;&#111;&#109;</a></span>
// 
// Which renders just like this would, were you to code it by hand:
// <span><a href="mailto:foo&bar@example.com">foo&bar@example.com</a></span>

