(function (){
'use strict';

var shoppingList1 = ['cereal','milk','bread','fruit','vegatables'];

var shoppingList2 = [{name: "cereal",quantity: "1"},{name: "milk",quantity: "2"},{name: "bread",quantity: "4"}];

angular.module('DIApp',[])
.controller('CounterController',CounterController)
.controller('DIController', DIController)
.controller('ShoppingListController',ShoppingListController)
.filter("greet",greetFilter)
.filter("farewell",farewellFilter);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope){
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function(){
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };
      $scope.shoppingList2.push(newItem);
    };
}

CounterController.$inject = ['$scope','$timeout'];
function CounterController($scope,$timeout){
  $scope.onceCounter = 0;
  $scope.counter = 0;

  $scope.showNumberOfWatchers = function(){
    console.log($scope);
  };

  $scope.countOnce = function(){
      $scope.onceCounter = 1;
  }

  $scope.upCounter = function (){
    $timeout(function(){
       $scope.counter++;
    },2000);
    // setTimeout(function (){
    //   $scope.$apply(function(){
    //
    //         $scope.counter++;
    //   });

      //  $scope.$digest();


  }





}
DIController.$inject = ['$scope','greetFilter'];
function DIController ($scope,greetFilter){
  $scope.name = "Will";
  $scope.stateOfBeing = "still.png";
  $scope.cookieCost = .45;


  $scope.sayHello = function (){
    var msg = "good bye";
    //var output = $filter('uppercase')(msg);
    return msg;
  };

  $scope.sayMorning = function (){
    var msg = "good bye";
    var msg = greetFilter(msg);
    return msg;
  };

  $scope.upper = function(){
    var upperCase = $filter('uppercase');
    $scope.name = upperCase($scope.name);
  }
  $scope.feed = function() {
    $scope.stateOfBeing = "moving.gif";
  };
}

function greetFilter(){
  return function(input){
  input = input || "";
  input = input.replace("bye","morning");
  return input;
};
}

function farewellFilter(){
  return function(input,target,replace){
    input = input || "";
    input = input.replace(target,replace);
    return input;
  };

}


})();
