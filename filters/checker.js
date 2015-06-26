/**
 * Created by Pankaj Kumar Dewangan on 23/06/15.
 */
var app = angular.module('sampleApp');

app.filter('checkmark' , function(){
    return function (input) {
        return input === "true" ? '\u2713' : '\u2718';
    }

});