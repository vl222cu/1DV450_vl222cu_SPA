angular
    .module('positionApp')
    .controller('MapController', MapController);

MapController.$inject = ['$scope'];

function MapController($scope) {
    $scope.map = {
      center: [40.7, -74]
      }
    
    $scope.marker = {
      position: [40.7, -74],
      options: function(){
        return {
          draggable: true
          }
        },
      events: {
        click: function(e) {
          alert(e.latLng)
        }
      }
    }
}