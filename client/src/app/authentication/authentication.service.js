(function() {
  'use strict';

  angular
    .module('authentication')
    .factory('AuthenticationService', AuthenticationService);

  function AuthenticationService() {
    return {
        authentication: authentication
    };

    function authentication() {
      console.log("Authentication ok");
    }



  }

  AuthenticationService.$inject = ['authenticationRepository'];

})();
