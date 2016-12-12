(function() {
  'use strict';

  /**
   * @name  formPsqiCtrl
   * @description Controller
   */
  function FormPsqiCtrl($scope) {

    var vm = this;

    vm.cardNumber = 1

    $scope.log = function() {
      console.log('--- vm ---')
      console.log(vm)
    }

    $scope.setNextCardNumber = function() {
      vm.cardNumber++
    }

    $scope.setPreviousCardNumber = function() {
      vm.cardNumber--
    }
  }

  angular.module('form-psqi', [])
    .controller('FormPsqiCtrl', FormPsqiCtrl)

    .$inject = ['$scope'];
})();
