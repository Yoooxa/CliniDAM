'use strict';

angular.module('tApp.auth', ['tApp.constants', 'tApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
