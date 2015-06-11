angular
    .module('positionApp')
    .controller('PlaceCreateController', PlaceCreateController);

PlaceCreateController.$inject = ['$scope', '$location', 'Restangular'];

function PlaceCreateController($scope, $location, Restangular) { 
  $scope.save = function() {     
      Restangular.all('places').customPOST(
      {creator_id: $scope.creator, name: $scope.place.name, text: $scope.place.text, address: $scope.place.address},
      '',
      {},
      {
        Authorization: $scope.token
      }
    )
    .then(function() {
      $location.path('/places');
    });
  }
}