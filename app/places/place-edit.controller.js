angular
    .module('positionApp')
    .controller('PlaceEditController', PlaceEditController);

PlaceEditController.$inject = ['$scope', '$location', 'Restangular', 'place', '$rootScope'];

function PlaceEditController($scope, $location, Restangular, place, $rootScope) {  
  var vm = this;
  $rootScope.justLoggedIn = false;
  $rootScope.error = false;
  $rootScope.success = false;
  
  var original = place;
  
  $scope.place = Restangular.copy(original);

  $scope.isClean = function() {
    return angular.equals(original, $scope.place);
  }

  $scope.destroy = function() {
    original.customDELETE(
      '',
      {name: $scope.place.name, text: $scope.place.text, address: $scope.place.address},
      {
        Authorization: $scope.token
      }
    )
    .then(function() {
      $rootScope.success = true;
      $location.path('/places'); 
      
      }, function(error) {
    $rootScope.error = true;
    console.log("Error with status code", error.status);
    });
  }
  
  $scope.save = function() {
    $scope.place.customPUT(
      {name: $scope.place.name, text: $scope.place.text, address: $scope.place.address},
      '',
      {},
      {
        Authorization: $scope.token
      }
    )
    .then(function() {
      $rootScope.success = true;
      $location.path('/places');
      
      }, function(error) {
    $rootScope.error = false;
    console.log("Error with status code", error.status);
    });
  };
}