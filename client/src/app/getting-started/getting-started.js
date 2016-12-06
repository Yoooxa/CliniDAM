(function() {
  'use strict';

  /**
   * @name  gettingStartedCtrl
   * @description Controller
   */
  function GettingStartedCtrl($log) {
    var docs = this;
    docs.someMethos = function () {
      $log.debug('I\'m a method');
    };
  }

  angular.module('getting-started', [])
    .controller('GettingStartedCtrl', GettingStartedCtrl);
})();
