/**
 * Created by Pankaj Kumar Dewangan on 24/06/15.
 */
var app = angular.module('sampleApp');

app.controller("LocalizationController", ['$scope', '$translate', function($scope, $translate) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    }
}]);