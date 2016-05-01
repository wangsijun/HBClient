/// <reference path="../base/BaseController.ts"/>
class PanelController{
    static $inject = ['userService'];
    title: string
    key: string
    constructor(UserService){
        var $this = this;
        $this.title = "hello";
        $this.key = "word";
        var user = UserService.getUser();
    }
}
angular.module('hb.components').controller('panelController',PanelController);