(function() {
  'use strict';

  angular
    .module('authentication')
    .service('AuthenticationService', AuthenticationService);

  function AuthenticationService() {
    return {
        authentication: authentication
    };

    function authentication() {
      console.log("Authentication ok");
    }

    /*var self = this;



    self.authentication = function () {

      return _test();

    };

    function _test (){
      return "test";

    }*/

  }

  //AuthenticationService.$inject = ['authenticationRepository'];

})();
