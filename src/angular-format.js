'use strict';

/* global
  angular
*/

angular.module('rh.format', []).

factory('format', function() {
  return function(template) {
    var args = arguments;

    return template.replace(/\{\w+\}/g, function(match) {
      match = match.slice(1, -1);
      if(isNaN(match)) {
        return args[args.length - 1][match];
      }
      return args[parseInt(match) + 1];
    });
  };
}).

filter('format', function(format) {
  return format;
});
