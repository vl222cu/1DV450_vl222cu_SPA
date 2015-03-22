angular
    .module('positionApp')
    .controller('PlaceEditController', PlaceEditController);

PlaceEditController.$inject = ['$scope', '$location', 'Restangular', 'place'];

function PlaceEditController($scope, $location, Restangular, place) {
  
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
      $location.path('/places');
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
      $location.path('/places');
    });
  };
}