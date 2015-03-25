angular
    .module('positionApp')
    .controller('PlaceByTagController', PlaceByTagController);

PlaceByTagController.$inject = ['$scope', 'Restangular', '$routeParams'];

function PlaceByTagController($scope, Restangular, $routeParams) {   
  $scope.places = Restangular.all('places').getList('tags', $routeParams.id).$object;
}