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
    original.remove().then(function() {
      $location.path('/places');
    });
  };

  $scope.save = function() {
    $scope.place.put().then(function() {
      $location.path('/places');
    });
  };
}