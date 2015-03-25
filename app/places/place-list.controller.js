angular
    .module('positionApp')
    .controller('PlaceListController', PlaceListController);

PlaceListController.$inject = ['$scope', 'Restangular', '$rootScope'];

function PlaceListController($scope, Restangular, $rootScope) {   
 $rootScope.error = false;
 $rootScope.success = false;
  
 $scope.places = Restangular.all("places").getList().$object;
  
/*  Restangular.all("places").getList().then(function(response) {    
    $scope.places = response;
   console.log($scope.places);
    console.log(response);
    $scope.tags = "";
    angular.forEach($scope.places, function(place, index) {
      $scope.tags = place.tags;
      console.log($scope.tags);
      angular.forEach(place.tags, function(tag, index) {
        $scope.tags.push(tag);
      });
    });
  }, function(response) {
    console.log("Error with status code", response.status);
  });  */
}