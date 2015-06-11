angular
    .module('positionApp')
    .controller('PlaceListController', PlaceListController);

PlaceListController.$inject = ['$scope', 'Restangular', '$rootScope'];

function PlaceListController($scope, Restangular, $rootScope) {   
  Restangular.all("places").getList().then(function(response) {    
    $scope.places = response;
    
  }, function(error) {
    console.log("Error with status code", error.status);
  });
}