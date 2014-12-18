angular-rh-format
=================

[![Build Status](https://travis-ci.org/remcohaszing/angular-rh-format.svg?branch=master)](https://travis-ci.org/remcohaszing/angular-rh-format)

Instroduction
-------------

angular-rh-formatting provides simple string formatting in AngularJS. It takes
a template string and formats it with the given parameters.

Getting started
---------------

1. Get angular-rh-format in one of the following ways:
  - Using bower:
    ```sh
    $ bower install angular-rh-format
    ```
  - Download the [sources](https://raw.githubusercontent.com/remcohaszing/angular-rh-format/master/dist/angular-rh-format.js) or [minified sources](https://raw.githubusercontent.com/remcohaszing/angular-rh-format/master/dist/angular-rh-format.min.js)

2. Include it in the HTML:
  ```html
  <html>
    ...
    <body>
      ...
      <script src="angular-rh-format/dist/angular-rh-format.js"></script>
    </body>
  </html>
  ```

3. Add it as a dependency to your AngularJS app:
  ```js
  angular.module('example', [
    'rh.format'
  ]);
  ```


Usage
-----

As a service:
```js
controller('ExampleCtrl', function($scope, format) {
  $scope.text = format('{person} like {0}', 'beer', {person: 'I'});
});
```

As a filter:
```html
{{'{person} like {0}'|format:'beer':{person:'I'}}}
```
