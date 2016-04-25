/// <reference path="../base/BaseController.ts"/>
class LoginController{
    static $inject = ['$scope','$q'];
    title:string
    scope:any
    q:any

    constructor($scope,$q){
        this.scope = $scope;
        this.q = $q;
        this.scope.title = "登录";
    }
}

angular.module('hb.components').controller('LoginController',LoginController);