(function() {
  'use strict';

  /**
   * @name  formDn4Ctrl
   * @description Controller
   */
  function FormDn4Ctrl($scope) {

    var vm = this

    vm.answers = [
      { label: "Oui", value: 1 },
      { label: "Non", value: 0}
    ]

  }

  angular.module('form-dn4', [])
    .controller('FormDn4Ctrl', FormDn4Ctrl)
    .$inject = ['$scope']
})();
