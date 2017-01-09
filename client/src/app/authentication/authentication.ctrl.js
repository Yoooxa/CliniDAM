/**
 * Created by arthur on 03/01/2017.
 */
(function() {
  'use strict';

  /**
   * @name  AuthenticationCtrl
   * @description Controller
   */
  function AuthenticationCtrl($scope, AuthenticationService) {

    var self = this;

    self.authentication = function () {

      _authenticate();
    };



    function _authenticate () {
      AuthenticationService.authentication();
    }

  }

  angular.module('authentication', [])
    .controller('AuthenticationCtrl', AuthenticationCtrl)
    //.$inject = ['$scope', 'AuthenticationService']
})();
