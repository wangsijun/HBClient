angular
    .module('hb.core')
    .filter('transactions', TransactionsFilter);

TransactionsFilter.$inject = ['$rootScope'];

function TransactionsFilter($rootScope) {
    function getValue(item, obj){
        return obj[item];
    }
    return function(name) {
        var filterArr = name.split('.');
        var obj =  $rootScope.data;
        angular.forEach(filterArr,function(item){
            obj = getValue(item,obj);
        })

        return obj;
    };
}

