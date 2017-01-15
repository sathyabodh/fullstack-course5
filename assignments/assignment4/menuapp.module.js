(function(){
  'use strict';
  angular.module('MenuApp', ['ui.router', 'data']);

  angular.module('MenuApp')
    .controller('RouteLogger', RouteLogger);

  RouteLogger.$inject=['$rootScope'];
  function RouteLogger($rootScope){
    console.log("RouteLogger");
    var $ctrl = this;
    var cancellers =[];
    $ctrl.$onInit = function () {
      var cancel = $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams, options){
        $ctrl.showSpinner = true;
        console.log("state change started");
      });
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams){
        console.log("state change started");
      });
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, fromState, fromParams, error){
        console.log("Error", error);
      });
      cancellers.push(cancel);
    };

    $ctrl.$onDestroy = function () {
      cancellers.forEach(function (item) {
        item();
      });
    };

  }

})();
