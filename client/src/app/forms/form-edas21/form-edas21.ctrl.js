(function() {
  'use strict';

  /**
   * @name  formEdas21Ctrl
   * @description Controller
   */
  function FormEdas21Ctrl($scope) {

    var vm = this;

    vm.inputsGroup = [
      {label: "Pas du tout", value: 1},
      {label: "Peu", value: 2},
      {label: "Beaucoup", value: 3},
      {label: "Totalement", value: 4},
    ]

    vm.cardNumber = 1

    $scope.setNextCardNumber = function() {
      vm.cardNumber++
    }

    $scope.setPreviousCardNumber = function() {
      vm.cardNumber--
    }
  }

  angular.module('form-edas21', [])
    .controller('FormEdas21Ctrl', FormEdas21Ctrl)
    .$inject = ['$scope'];
})();
