(function() {
  'use strict';


  function authenticationRepository($resource) {
    return $resource('api/authentication', {
      pseudo: "@pseudo",
      password: "@password"
    }, {
      "connexion": {
        method: 'POST',
        isArray: false,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });

  }

  authenticationRepository.$inject = ["$resource"]
  angular
    .module('authentication')
    .service('authenticationRepository', authenticationRepository);
})();
