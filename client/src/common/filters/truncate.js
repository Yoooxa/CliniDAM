(function() {
  'use strict';

  function truncate() {
    return function(text, maxLength) {
      return text.length > maxLength ? text.substring(0, maxLength) : text;
    };
  }

  angular.module('common.filters.truncate', [])
    .filter('truncate', truncate);
})();
