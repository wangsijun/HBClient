/// <reference path="../ts.d.ts"/>
module NavmMenuListDirective{
    export class NavMenuList {
        //static $inject=[]

        constructor(){
            var directive:ng.IDirective= {}
            directive.restrict='E'
            directive.scope=true
            directive.templateUrl='/app/templates/directive-tmp/nav-menu-list.html'
            directive.controller=NavMenuListController
            directive.controllerAs='navList'
            directive.bindToController={ 'data':'='}
            return directive;
        }
    }

    export class NavMenuListController{
        //static $inject = ['$scope','$state','$log']
        state:any
        data:Array<any>
        constructor($scope,$state,$log){
            var $this = this
            $this.data=this.data
            $this.state = $state
        }

        GoState(link){
            var $this =this
            $this.state.go(link)
        }
    }
}
angular.module('hb.directive').directive('navMenuList', [NavmMenuListDirective.NavMenuList])