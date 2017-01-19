(function() {
  'use strict';

  /**
   * @name  WhyWebsiteCtrl
   * @description Controller
   */
  function WhyWebsiteCtrl($scope) {

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

  angular.module('why-website', [])
    .controller('WhyWebsiteCtrl', WhyWebsiteCtrl)
    .$inject = ['$scope'];
})();

