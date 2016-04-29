/// <reference path="../base/BaseController.ts"/>
class PanelController{
    static $inject = [];
    title: string
    key: string
    constructor(){
        var $this = this;
        $this.title = "hello";
        $this.key = "word";
    }

}
angular.module('hb.components').controller('panelController',PanelController);