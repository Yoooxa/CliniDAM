(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'app.routes',
      'home',
      'getting-started',
      'form-isi',
      'form-psqi',
      'form-dn4',
      'form-edas21',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version',
      'common.directives.oneclick',
      'common.filters.uppercase',
      'common.filters.truncate'
    ])
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
