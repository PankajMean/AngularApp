/**
 * Created by sumasoft on 23/06/15.
 */
var app = angular.module('sampleApp');

app.factory('MyService', ['$resource',
    function($resource){
        return $resource('../js/controller/data.json', {}, {
           'query' : {method : 'GET', isArray: true }
        });
}]);