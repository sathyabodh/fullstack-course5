(function(){
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'category-list.html',
      bindings:{
        items : '<'
      }
    });
})();
