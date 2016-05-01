/// <reference path="../base/BaseController.ts"/>
class MenuController{
    static $inject = ['userService'];

    constructor(UserService){
        var $this = this;

    }
}
angular.module('hb.components').controller('menuController',MenuController);