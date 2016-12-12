(function() {
    'use strict';

    function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');
        $logProvider.debugEnabled(true);
        $httpProvider.interceptors.push('httpInterceptor');

        $stateProvider
            .state('root', {
                views: {
                    'header': {
                        templateUrl: 'src/common/header.tpl.html',
                        controller: 'HeaderCtrl'
                    },
                    'footer': {
                        templateUrl: 'src/common/footer.tpl.html',
                        controller: 'FooterCtrl'
                    }
                }
            })

            .state('root.home', {
                url: '/',
                views: {
                  '@': {
                    templateUrl: 'src/app/home/home.tpl.html',
                    controller: 'HomeCtrl as home',
                    resolve: {
                      data: function(DataService) {
                        return DataService.get();
                      }
                    }
                  }
                }
              })

          .state('form-isi', {
            url: '/forms/form-isi',
            views: {
              '@': {
                templateUrl: 'src/app/forms/form-isi/form-isi.tpl.html',
                controller: 'FormIsiCtrl as formIsi'
              }
            }
          });
    }

        angular.module('app.routes', ['ui.router',
            'common.interceptors.http',
            'templates']).config(config);
})();
