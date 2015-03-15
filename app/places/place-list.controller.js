angular
    .module('positionApp')
    .controller('PlaceListController', PlaceListController);

PlaceListController.$inject = ['$scope', 'Restangular'];

function PlaceListController($scope, Restangular) { 
  $scope.places = Restangular.all("places").getList().$object;
}