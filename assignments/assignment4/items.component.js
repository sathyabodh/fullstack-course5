(function(){
  'use strict';
  angular.module('MenuApp')
    .component("itemsList", {
      templateUrl:"item-component.html",
      bindings:{
        items: '<'
      }
      });
})();
