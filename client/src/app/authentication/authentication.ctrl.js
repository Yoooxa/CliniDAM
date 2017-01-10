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

    var vm = this;
    
    vm.login = login;

    vm.authentication = function () {

      _authenticate();
    };

    function _authenticate () {
      AuthenticationService.authentication();
    }

    function login() {
      if(response.sucess) {
        console.log('Login OK');
      } else {
        console.log('Login KO');
      }
    }

  }

  angular
    .module('authentication', [])
    .controller('AuthenticationCtrl', AuthenticationCtrl)
    //.$inject = ['$scope', 'AuthenticationService']
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('grey')
    })
})();
