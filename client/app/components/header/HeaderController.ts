/// <reference path="../base/BaseController.ts"/>
class HeaderController{
    static $inject = ['userService'];

    constructor(UserService){
        var $this = this;

    }
}
angular.module('hb.components').controller('headerController',HeaderController);