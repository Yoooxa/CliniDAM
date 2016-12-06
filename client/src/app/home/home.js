(function() {
  'use strict';

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl(data) {
    var home = this;
    home.data = data.data;
  }

  angular.module('home', [])
    .controller('HomeCtrl', HomeCtrl);
})();
