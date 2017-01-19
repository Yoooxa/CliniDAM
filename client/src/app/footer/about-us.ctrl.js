(function() {
  'use strict';

  /**
   * @name  formDn4Ctrl
   * @description Controller
   */
  function AboutUsCtrl($scope) {

    var vm = this;

    vm.cardNumber = 1;

    $scope.log = function() {
      console.log('--- vm ---')
      console.log(vm)
    }

    $scope.setNextCardNumber = function() {
      vm.cardNumber++;
    }

    $scope.setPreviousCardNumber = function() {
      vm.cardNumber--;
    }
  }

  angular.module('about-us', [])
    .controller('AboutUsCtrl', AboutUsCtrl)
    .$inject = ['$scope'];
})();

