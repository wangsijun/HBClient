/// <reference path="../base/BaseController.ts"/>
class LoginController{
    static $inject = ['$scope','$q','$state','userService'];

    userService:UserService
    title:string
    scope:any
    state:any
    q:any

    constructor($scope,$q,$state,UserService){
        var $this = this;
        $this.userService = UserService
        $this.scope = $scope
        $this.state = $state
        $this.q = $q
        $this.title = "登录"
    }
    
    login(){
        var $this = this
        var user = $this.userService.getUser()
        user.isAuthentication=true
        $this.userService.updateUser()
        $this.state.go('panel.menu')
    }
}

angular.module('hb.components').controller('loginController',LoginController);