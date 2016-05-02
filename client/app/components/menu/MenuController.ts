/// <reference path="../base/BaseController.ts"/>
class MenuController{
    static $inject = ['$http','$log','userService'];
    http:any
    log:any
    userService:UserService
    menuList:Array<any>

    constructor($http,$log,UserService){
        var $this = this;
        $this.http = $http
        $this.log = $log
        $this.userService=UserService
        $this.http.get('/assets/jsons/menuLists.json').success(function(result){
            angular.forEach(result.menuData,function(item,index){
                if(index===0){
                    item.active=true
                }
            })
            $this.menuList =result.menuData
        }).error(function(err){
            $this.log.log(err)
        })
    }
}
angular.module('hb.components').controller('menuController',MenuController);