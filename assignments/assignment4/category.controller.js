(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('CategoryController', CategoryController);

  CategoryController.$inject=['items'];
  function CategoryController(items){
    console.log("CategoryController");
    var $ctrl = this;
    $ctrl.categories = items;
  }

})();
