angular.module('hb.components', [])
angular.module('hb.service',[])
angular.module('hb.core',['ui.router'])

angular.module('HB',[
    'ui.router',
    'ui.bootstrap',
    'hb.core',
    'hb.components',
   // 'ngAnimate',
    'ngCookies',
    'angularMoment'
])