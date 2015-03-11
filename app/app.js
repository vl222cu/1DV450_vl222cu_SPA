angular
  .module('positionApp', ['ngRoute', 'ngMaps'])
  .config(config);

function config($routeProvider, $locationProvider) {  
  $routeProvider.
  when('/', {
    templateUrl: 'layout/home.html'
  }).
  when('/map', {
    templateUrl: 'layout/map.html',
    controller: 'MapController'
  }).
  otherwise({
    redirectTo: '/'
  }); 
  $locationProvider.html5Mode(true);
}

