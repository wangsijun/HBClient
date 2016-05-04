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
        scope:any
        data:Array<any>


        constructor($scope,$state,$log){
            var $this = this
            $this.data=this.data
            $this.state = $state
            $this.scope = $scope
        }

        GoState(link,menu){
            var $this =this
            angular.forEach($this.data,function(item,index){
                if(item.child){
                    angular.forEach(item.child,function(n,i){
                        n.active = false
                    })
                }
            })
            if(menu){
                menu.active=true
            }
            $this.state.go(link)
        }

        OperateMenuList(e) {
            var ele = e.currentTarget.nextElementSibling;
            var openEle = $(".childMenu.open");
            var className = ele.className;
            openEle.removeClass('open');
            if (className.indexOf('open')==-1) {
                $(ele).addClass('open');
            }
        }
    }
}
angular.module('hb.directive').directive('navMenuList', [NavmMenuListDirective.NavMenuList])