/*!
 * getUniqueClass - v1.0 - 1/27/2009
 * http://benalman.com/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */

jQuery.getUniqueClass = function() {
  var name, i = 0;
  while ( $('.' + (name = 'BA-' + (+new Date) + (i++))).length ) { };
  return name;
}

// About:
// 
// For when you really need a unique classname, (like when you're cloning a
// whole bunch of elements and don't exactly know where they're going, but
// need to do something with them after they've gotten there).
// 
// Sample Usage:
// 
// var c = $.getUniqueClass();      // c set to 'BA-12352576545660' or so
// $('p').addClass(c);
// .. haphazardly clone a bunch of <p> elements ..
// $('.' + c).removeClass(c).doSomething();
