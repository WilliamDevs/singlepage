(function (){
'use strict';

angular.module('DIApp',[])

.controller('DIController', DIController);


function DIController ($scope,$filter){
  $scope.name = "Will";

  $scope.sayHello = function (){
    return "hello";
  };

  $scope.upper = function(){
    var upperCase = $filter('uppercase');
    $scope.name = upperCase($scope.name);
  }
}

})();
