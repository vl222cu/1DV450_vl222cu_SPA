angular
    .module('positionApp')
    .controller('PlaceListController', PlaceListController);

PlaceListController.$inject = ['$scope', 'Restangular', '$routeParams'];

function PlaceListController($scope, Restangular, $routeParams) {   
  $scope.places = Restangular.all("places").getList().$object;
}