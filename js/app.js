/**
 * Created by sumasoft on 23/06/15.
 */
var module = angular.module("sampleApp", ['ngRoute','ngResource', 'ngAnimate', 'pascalprecht.translate']);

module.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/route1', {
                templateUrl: 'todo.html',
                controller: 'IndexCtrl'
            }).
            when('/route2', {
                templateUrl: 'view2.html',
                controller: 'View2Controller'
            }).
            when('/details/:name/:val', {
                templateUrl: 'todo.html',
                controller: 'ParamController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);


module.config(['$translateProvider', function($translateProvider){
    $translateProvider
    .translations('en', {
    "hi" : "My Name is Pankaj Kumar Dewangan"
    })
    .translations('ch', {
        "hi" : "我的名字是潘卡·库马尔"
    })
    .preferredLanguage('en');
}]);




