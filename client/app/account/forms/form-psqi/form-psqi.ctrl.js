(function() {
  'use strict';

  /**
   * @name  formPsqiCtrl
   * @description Controller
   */
  function FormPsqiCtrl($scope) {

    var vm = this;

    vm.inputsGroup = [
      {label: "Pas au cours du dernier mois", value: 1},
      {label: "Moins d'une fois par semaine", value: 2},
      {label: "1 à 2 fois par semaine", value: 3},
      {label: "3 ou 4 fois par semaine", value: 4}
    ]

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

    .$inject = ['$scope']
})();
