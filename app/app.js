angular
  .module('positionApp', ['ngRoute', 'ngMaps', 'restangular'])
  .config(config);

function config($routeProvider, $locationProvider, RestangularProvider) {  
  $routeProvider.
  when('/', {
    templateUrl: 'layout/home.html'
  }).
  when('/map', {
    templateUrl: 'layout/map.html',
    controller: 'MapController'
  }).
  when('/places', {
    templateUrl: 'places/place-list.html',
    controller: 'PlaceListController',
  }).
  otherwise({
    redirectTo: '/'
  }); 
  $locationProvider.html5Mode(true);
  
  RestangularProvider.setBaseUrl('http://fierce-fireball-96-185708.euw1-2.nitrousbox.com/api/v1');
  RestangularProvider.setDefaultHeaders({ apiKey: "7f842a957f0468757aa20fbd73c17b02" })
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setRestangularFields({
    id: '_id.$oid'
  });
}

