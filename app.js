(function () {
  'use-strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope, $filter){
  $scope.lunchList = "";
  $scope.checkIfTooMuch = function(){
    var lunchList = $scope.lunchList;
    lunchList = normalize(lunchList);
    if (lunchList===""){
      $scope.messageStyle = "errorMessage";
      $scope.borderStyle = "errorTextInput";
      $scope.message = "Please enter data first";
    }
    else{
      $scope.messageStyle = "successMessage";
      $scope.borderStyle = "successTextInput";
      var items = lunchList.split(",");
      var numItems = items.length;
      if (numItems<4){
        $scope.message = "Enjoy!";
      }
      else{
        $scope.message = "Too much!";
      }
    }
    console.log(numItems);
  };
}

function normalize(lunchList){
  lunchList = lunchList.replace(/\s+/g, "");
  lunchList = lunchList.replace(/,+/g, ",");
  lunchList = lunchList.replace(/^,/, "");
  lunchList = lunchList.replace(/,$/, "");
  return lunchList;
}

})();
