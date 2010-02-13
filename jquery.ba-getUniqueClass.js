/*!
 * getUniqueClass - v1.1 - 2/13/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// For when you really need a unique classname, (like when you're cloning a
// whole bunch of elements and don't exactly know where they're going, but need
// to do something with them after they've gotten there).

jQuery.getUniqueClass = function() {
  var name, i = 0;
  while ( jQuery('.' + (name = 'BA-' + (+new Date) + (i++))).length ) { };
  return name;
};
