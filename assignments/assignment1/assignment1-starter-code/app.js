(function(){
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", lunchCheckController);

  lunchCheckController.$inject=["$scope"];
  function lunchCheckController($scope){
    $scope.lunchMenu = "";
    $scope.messageStyle = "form-group message";

    $scope.checkLunchMenu = function(){
      if($scope.lunchMenu == ""){
        $scope.message = "Please enter data first";
        $scope.messageStyle = "form-group message message_error";
        return;
      }
      var lunchItems = $scope.lunchMenu.split(',');
      $scope.messageStyle = "form-group message message_ok";
      if (lunchItems.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }

  };

})();
