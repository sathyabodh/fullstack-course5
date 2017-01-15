(function(){
  'use strict';

  angular.module('MenuApp')
    .config(RouteConfig);
  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RouteConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('categories',{
      url: '/categories',
      templateUrl:'categories.html',
      controller: 'CategoryController as CategoryCtrl',
      resolve: {
        items: ['MenuDataService',function(MenuDataService){
            return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items',{
      url:'/items/{categoryId}',
      templateUrl:'menu-items.html',
      controller:'ItemDetailController as ItemDetailCtrl',
      resolve:{
        items: ['$stateParams','MenuDataService', function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryId);
        }]
      }

    });
  }

})();
