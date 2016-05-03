/// <reference path="./PanelController.ts"/>

class PermissionSettingsController extends PanelController{
    static $inject =['userService']
    userService:UserService

    constructor(UserService){
        super(UserService,'permission-settings')
        var $this = this
        $this.key="这个"
        $this.title="很满意"
        $this.userService = UserService
    }

}
angular.module('hb.components').controller('permissionSettingsController',PermissionSettingsController);