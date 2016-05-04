/// <reference path="./BaseService.ts"/>

class NavigationService{
    static $inject = ['$rootScope','$state','$log','$cookies','$window','userService'];
    rootScope:any
    state:any
    log:any
    cookies:any
    window:any
    userService:UserService
    widescreen:boolean

    constructor($rootScope,$state,$log,$cookies,$window,UserService){
        var $this = this
        $this.rootScope = $rootScope
        $this.state = $state
        $this.log = $log
        $this.cookies = $cookies
        $this.window = $window
        $this.userService = UserService
        $this.widescreen=true
    }
}
angular.module('hb.service').service('navigationService',NavigationService);