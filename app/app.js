angular
  .module('positionApp', ['ngRoute', 'ngMap', 'restangular', 'angular-flash.service', 'angular-flash.flash-alert-directive', 'viDirective'])
  .config(config);

function config($routeProvider, $locationProvider, RestangularProvider, flashProvider) {  
  $routeProvider.
  when('/', {
    templateUrl: 'layout/home.html'
  }).
  when('/login', {
    templateUrl: 'authentication/login.html',
    controller: 'LoginController',
    controllerAs: 'auth'
  }).
  when('/places', {
    templateUrl: 'places/place-list.html',
    controller: 'PlaceListController'
  }).
  when('/place/:id', {
    templateUrl: 'places/place-detail.html',
    controller: 'PlaceDetailController',
    controllerAs: 'place'
  }).
  when('/place/:id/edit', {
    templateUrl: 'places/place-edit.html',
    controller: 'PlaceEditController',
    controllerAs: 'edit',
    resolve: {
      place: function(Restangular, $route){
        return Restangular.one('places', $route.current.params.id).get();
      }
    }
  }).
   when('/places/new', {
    templateUrl: 'places/place-edit.html',
    controller: 'PlaceCreateController'
  }).
  when('/logout', {
    templateUrl: 'authentication/logout.html',
    controller: 'LogoutController'
  }).
  otherwise({
    redirectTo: '/'
  }); 
  $locationProvider.html5Mode(true);
  
  RestangularProvider.setBaseUrl('http://fierce-fireball-96-185708.euw1-2.nitrousbox.com/api/v1');
  RestangularProvider.setDefaultHeaders({ apiKey: "7f842a957f0468757aa20fbd73c17b02" })
  RestangularProvider.setRequestSuffix('.json');

  flashProvider.errorClassnames.push('alert-danger');
  flashProvider.successClassnames.push('alert-success');
}

