angular
    .module('positionApp')
    .controller('PlaceCreateController', PlaceCreateController);

PlaceCreateController.$inject = ['$scope', '$location', 'Restangular'];

function PlaceCreateController($scope, $location, Restangular) { 
  $scope.save = function() {
    Restangular.all('places').post($scope.place).then(function(place) {
      $location.path('/places');
    });
  }
}