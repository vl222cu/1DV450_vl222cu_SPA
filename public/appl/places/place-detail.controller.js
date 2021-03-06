angular
    .module('positionApp')
    .controller('PlaceDetailController', PlaceDetailController);

PlaceDetailController.$inject = ['$scope', 'Restangular', '$routeParams'];

function PlaceDetailController($scope, Restangular, $routeParams) {
  Restangular.one('places', $routeParams.id).get().then(function(response) {    
    $scope.place = response;
  }, function(error) {
    console.log("Error with status code", error.status);
  });  
}