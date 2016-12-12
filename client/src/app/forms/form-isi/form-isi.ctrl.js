(function() {
  'use strict';

  /**
   * @name  formIsiCtrl
   * @description Controller
   */
  function FormIsiCtrl($scope) {
    
    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = false;
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;
  }

  angular.module('form-isi', ['ngMaterial'])
    .controller('FormIsiCtrl', FormIsiCtrl);
})();
