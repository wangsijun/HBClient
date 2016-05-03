/// <reference path="../base/BaseController.ts"/>
class PanelController{
    //static $inject = ['userService'];
    title: string
    key: string
    state: string
    constructor(UserService,state){
        var $this = this;
        $this.title = "hello";
        $this.key = "word";
        $this.state = state;
        var user = UserService.getUser();
    }
}
angular.module('hb.components').controller('panelController',PanelController);