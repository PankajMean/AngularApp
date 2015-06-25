/**
 * Created by sumasoft on 23/06/15.
 */
var app = angular.module('sampleApp');


app.controller('IndexCtrl', ['$scope', '$http', 'MyService', function($scope, $http, MyService) {

    $scope.toDoList =[];


    /*This is the one way to get data by $http*/
    /*$http.get('../js/controller/data.json').success(function(data){
        $scope.toDoList = data;
        //console.log(data);
    });*/

    /*Another way to get data by using $resourse*/
    $scope.toDoList = MyService.query();

    $scope.add = function (form) {
        $scope.toDoList.push({
               text : form.newText,
                done : false
        });
        $scope.newText = '';
    };
}]);

app.controller("ParamController", ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.data = {
        name : $routeParams.name,
        done : $routeParams.val
    };
}]);


app.controller('HeaderController', ['$scope', 'Menu', function($scope, Menu){
    //$scope.selectedMenu = Menu.selectedMenu;
    $scope.setMenuTitle = function(menuTitle) {
        $scope.selectedMenu = menuTitle;
    };
}]);

/*$resource expects object or array as response from server, not raw string.
So if you have raw string (or anything except object and array) as a response, you have to use $http*/

