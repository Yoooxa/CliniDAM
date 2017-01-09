(function() {
  'use strict';

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl($scope) {
    var vm = this;
    $scope.imagePath = '../assets/images/form-background.jpg';
  }

  angular.module('home', ['ngMaterial'])
    .controller('HomeCtrl', HomeCtrl)
    .$inject = ['$scope'];
})();
