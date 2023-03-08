const app = angular.module("myApp", ["ngRoute"]);
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: 'sites/open-site.html',
                })
                .when("/sylwetka", {
                    templateUrl: 'sites/sylwetka.html',
                })
                .when("/os", {
                    templateUrl: 'sites/os.html',
                })
                .when("/rodzina", {
                    templateUrl: 'sites/rodzina.html',
                })
                .when("/przedsiewziecia", {
                    templateUrl: 'sites/przedsiewziecia.html',
                })
                .when("/charakter", {
                    templateUrl: 'sites/charakter.html',
                })
                .when("/wplyw", {
                    templateUrl: 'sites/wplyw.html',
                })
                .otherwise({
                    redirectTo: '/'
                });
                
        });
