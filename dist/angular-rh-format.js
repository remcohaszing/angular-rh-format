'use strict';

/* global
  angular
*/

/**
 * @ngdoc overview
 * @name rh.format
 *
 * @description
 * This module provides a `format` {@link rh.format.format factory} and
 * {@link rh.format.filter:format filter}. These can be used for Python
 * `str.format` like string formatting.
 */
angular.module('rh.format', []).

/**
 * @ngdoc function
 * @name rh.format.format
 *
 * @description
 * This function formats a string. It replaces a number enclosed by
 * curly brackets with the nth argument given. Named arguments can be
 * used as well. The last object given is used for finding these
 * variables.
 *
 * @param {string} template The template string to parse.
 * @param {string...=} arguments The arguments to use for parsing the template.
 * @param {Object=} keywords The arguments to use for parsing the template.
 *
 * @example
   <example module="example">
     <file name="index.html">
       <div ng-controller="ExampleCtrl">
         {{text}}
       </div>
     </file>
     <file name="scripts.js">
       angular.module('example', [
         'rh.format'
       ]).

       controller('ExampleCtrl', function($scope, format) {
         $scope.text = format('{person} like {0}', 'beer', {person: 'I'});
       });
     </file>
   </example>
 */
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

/**
 * @ngdoc filter
 * @name rh.format.filter:format
 *
 * @description
 * This filter formats a string. It replaces a number enclosed by
 * curly brackets with the nth argument given. Named arguments can be
 * used as well. The last object given is used for finding these
 * variables.
 *
 * @param {string} template The template string to parse.
 * @param {string...=} arguments The arguments to use for parsing the template.
 * @param {Object=} keywords The arguments to use for parsing the template.
 *
 * @example
   <example module="example">
     <file name="index.html">
       <div ng-controller="ExampleCtrl">
         <label>
           template:
           <input ng-model="template">
         </label>
         <label>
           arg:
           <input ng-model="arg">
         </label>
         <label>
           kwargs.person:
         <input ng-model="kwargs.person">
         <br>
         Result:
         {{template|format:arg:kwargs}}
       </div>
     </file>
     <file name="scripts.js">
       angular.module('example', [
         'rh.format'
       ]).

       controller('ExampleCtrl', function($scope) {
         $scope.arg = 'beer';
         $scope.kwargs = {
           person: 'I'
         };
         $scope.template = '{person} like {0}';
       });
     </file>
   </example>
 */
filter('format', ["format", function(format) {
  return format;
}]);
