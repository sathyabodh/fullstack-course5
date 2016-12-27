(
  function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    function ShoppingListCheckOffService()
    {
      var service = this;
      var toBeBoughtList = [
        {name: "Apples", quantity:10},
        {name: "Grapes", quantity:20},
        {name: "Orange", quantity:30},
        {name: "Banana", quantity:12},
        {name: "Cherry", quantity:15}
      ];

      var boughtList = [];

      service.addToBoughtList = function(index){
        var item = toBeBoughtList[index];
        boughtList.push(item);
        toBeBoughtList.splice(index, 1);
      };

      service.getToBeBoughtList = function(){
        return toBeBoughtList;
      };

      service.getAlreadyBoughtList = function(){
        return boughtList;
      };
    }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService)
  {
    var ToBuyCtl = this;
    ToBuyCtl.toBuyList = function(){
      return ShoppingListCheckOffService.getToBeBoughtList();
    };

    ToBuyCtl.bought = function(index){
      ShoppingListCheckOffService.addToBoughtList(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService)
  {
    var AlreadyBoughtCtl = this;
    AlreadyBoughtCtl.boughtList = function(){
      return ShoppingListCheckOffService.getAlreadyBoughtList();
    }
  }

})();
