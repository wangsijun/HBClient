/// <reference path="../base/BaseController.ts"/>
class LoginController{
    static $inject = ['$scope','$q'];
    title:string
    scope:any

    constructor($scope,$q){
        this.scope = $scope;
        this.scope.title = "��¼";
    }
}

angular.module('hb.components').controller('LoginController',LoginController);