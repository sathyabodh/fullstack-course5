(function(){

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var narrowDownCtrl = this;

    narrowDownCtrl.search = function(){
      MenuSearchService.getMatchedMenuItems(narrowDownCtrl.searchTerm).then(function(result){
      narrowDownCtrl.found = result;
      console.log("Assigning foundItem to controller");
    });
    narrowDownCtrl.remove = function(index){
      narrowDownCtrl.found.splice(index,1);
    }
    console.log("End of controller");
  };
  }

  MenuSearchService.inject = ['http'];
  function MenuSearchService($http){
    var menuservice = this;

    menuservice.getMatchedMenuItems = function(searchTerm){

      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      })
      .then(function(result){
          var foundItems = [];
          var menuItems = result.data.menu_items;
          for(idx in menuItems){
            var menuItem = menuItems[idx];
            if(menuItem.description.indexOf(searchTerm) != -1){
              foundItems.push(menuItem);
            }
          }
          console.log("Searchservice returning matching foundItems");
          return foundItems;
      });

    }

  }

  function FoundItems(){
    return {
      restrict:'E',
      scope:{
        foundItems: '=foundItems',
        remove: '&onRemove'
      },
      templateUrl: 'foundItems.html',
      //template: '<h3> Menu Items </h3>',
    }
  }

})();
