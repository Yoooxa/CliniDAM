(function() {
  'use strict';

  function oneClickDirective() {
    return {
      restrict: 'A',
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
  }

  angular.module('common.directives.oneclick', [])
    .directive('oneclick', oneClickDirective);
})();
