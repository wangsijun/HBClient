/// <reference path="./BaseService.ts"/>

class NavigationService{
    static $inject = ['$rootScope','$state','$log','$cookies','userService'];
    rootScope:any
    state:any
    log:any
    cookies:any
    userService:any

    constructor($rootScope,$state,$log,$cookies,UserService){
        this.rootScope = $rootScope;
        this.state = $state;
        this.log = $log;
        this.cookies = $cookies;
        this.userService = UserService;
    }


}
angular.module('hb.service').service('navigationService',NavigationService);