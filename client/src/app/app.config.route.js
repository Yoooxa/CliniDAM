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

          .state('root.form-isi', {
            url: '/forms/form-isi',
            views: {
              '@': {
                templateUrl: 'src/app/forms/form-isi/form-isi.tpl.html',
                controller: 'FormIsiCtrl as formIsi'
              }
            }
          })

          .state('root.form-psqi', {
            url: '/forms/form-psqi',
            views: {
              '@': {
                templateUrl: 'src/app/forms/form-psqi/form-psqi.tpl.html',
                controller: 'FormPsqiCtrl as forsqmPi'
              }
            }
          })

          .state('root.form-dn4', {
            url: '/forms/form-dn4',
            views: {
              '@': {
                templateUrl: 'src/app/forms/form-dn4/form-dn4.tpl.html',
                controller: 'FormDn4Ctrl as formDn4'
              }
            }
          })

          .state('root.form-edas21', {
            url: '/forms/form-edas21',
            views: {
              '@': {
                templateUrl: 'src/app/forms/form-edas21/form-edas21.tpl.html',
                controller: 'FormEdas21Ctrl as formEdas21'
              }
            }
          });
    }

        angular.module('app.routes', ['ui.router',
            'common.interceptors.http',
            'templates']).config(config);
})();
