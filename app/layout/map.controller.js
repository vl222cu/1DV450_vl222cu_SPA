angular
    .module('positionApp')
    .controller('MapController', MapController);

MapController.$inject = ['$scope'];

function MapController($scope) {
    $scope.map = {
      center: [-8.409517, 115.188916]
      }
    
    $scope.marker = {
      position: [-8.409517, 115.188916],
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