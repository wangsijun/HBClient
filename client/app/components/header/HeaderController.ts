/// <reference path="../base/BaseController.ts"/>
class HeaderController{
    static $inject = ['$scope','userService','navigationService'];
    scope:any
    navigationService:NavigationService
    widescreen:boolean

    constructor($scope,UserService,NavigationService){
        var $this = this;
        $this.scope = $scope
        $this.navigationService = NavigationService
        $this.widescreen = true
    }
    ChangeWidescreen(){
        var $this = this
        $this.widescreen = !$this.widescreen
        $this.navigationService.widescreen = $this.widescreen
    }
}
angular.module('hb.components').controller('headerController',HeaderController);