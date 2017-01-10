(function() {
  'use strict';

  /**
   * @name  formDn4Ctrl
   * @description Controller
   */
  function FormDamCtrl($scope) {

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

    vm.answers = [
      { label: "Oui", value: 1 },
      { label: "Non", value: 0}
    ];

    vm.sex = ('Homme Femme').split(' ').map(function (sex) { return { abbrev: sex }; });
  }

  angular.module('form-dam', [])
    .controller('FormDamCtrl', FormDamCtrl)
    .$inject = ['$scope'];
})();
