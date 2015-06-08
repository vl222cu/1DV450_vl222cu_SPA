angular
    .module('positionApp')
    .controller('PlaceListController', PlaceListController);

PlaceListController.$inject = ['$scope', 'Restangular', '$rootScope'];

function PlaceListController($scope, Restangular, $rootScope) {   
  
/* $scope.places = Restangular.all("places").getList().$object; */
  Restangular.all("places").getList().then(function(response) {    
    $scope.places = response;
    
  }, function(error) {
    console.log("Error with status code", error.status);
  });

/*   Restangular.all("places").getList().then(function(response) {    
    $scope.places = response;
   console.log($scope.places);
    console.log(response.id);
    $scope.tags = "";
    angular.forEach($scope.places, function(place, index) {
      $scope.tags = place.tags;
      console.log($scope.tags);
      angular.forEach(place.tags, function(tag, index) {
        $scope.tags.push(tag);
        $scope.tag = tag.name;
        console.log($scope.tag);
        });
     for (var i = 0; i < $scope.tags.length; i++) {
        console.log($scope.tags[i].name);
      }    
    }); 
  }, function(response) {
    console.log("Error with status code", response.status);
  });  */
}