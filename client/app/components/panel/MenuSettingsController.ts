/// <reference path="./PanelController.ts"/>

class MenuSettingsController extends PanelController{
    static $inject = ['userService']
    userService:UserService

    constructor(UserService){
        super(UserService,'menu-settings')
        var $this = this
        $this.key="不错哦!@"
        $this.title="哎呦"
        $this.userService = UserService
    }
}
angular.module('hb.components').controller('menuSettingsController',MenuSettingsController);
