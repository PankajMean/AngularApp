/**
 * Created by Pankaj Kumar Dewangan on 25/06/15.
 */
var app = angular.module('sampleApp');
app.service('Menu', function(){
    this.selectedMenu = 'twoWay';
    this.setMenu = function(menuTitle) {
        this.selectedMenu = menuTitle;
    }
});