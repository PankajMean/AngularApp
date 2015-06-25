/**
 * Created by sumasoft on 24/06/15.
 */
var app = angular.module('sampleApp');

app.controller("View2Controller", ['$scope', '$translate', function($scope, $translate) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    }
}]);