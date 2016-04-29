/// <reference path="../base/BaseController.ts"/>
class LoginController{
    static $inject = ['$scope','$q','$state'];
    title:string
    scope:any
    state:any
    q:any

    constructor($scope,$q,$state){
        var $this = this;
        $this.scope = $scope;
        $this.state = $state;
        $this.q = $q;
        $this.title = "登录";
    }
    
    login(){
        this.state.go('panel');
    }
}

angular.module('hb.components').controller('loginController',LoginController);