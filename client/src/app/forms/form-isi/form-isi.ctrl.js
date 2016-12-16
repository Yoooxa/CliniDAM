(function() {
  'use strict';

  /**
   * @name  formIsiCtrl
   * @description Controller
   */
  function FormIsiCtrl($scope) {
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

  angular.module('form-isi', ['ngMaterial'])
    .controller('FormIsiCtrl', FormIsiCtrl)
    .$inject = ['$scope'];
})();
