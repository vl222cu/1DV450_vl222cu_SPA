angular
  .module('positionApp', ['ngRoute', 'ngMaps', 'restangular'])
  .config(config);

function config($routeProvider, $locationProvider, RestangularProvider) {  
  $routeProvider.
  when('/', {
    templateUrl: 'layout/home.html'
  }).
  when('/login', {
    templateUrl: 'authentication/login.html',
    controller: 'LoginController'
  }).
  when('/map', {
    templateUrl: 'layout/map.html',
    controller: 'MapController'
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
  otherwise({
    redirectTo: '/'
  }); 
  $locationProvider.html5Mode(true);
  
  RestangularProvider.setBaseUrl('http://fierce-fireball-96-185708.euw1-2.nitrousbox.com/api/v1');
  RestangularProvider.setDefaultHeaders({ apiKey: "7f842a957f0468757aa20fbd73c17b02" })
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setRequestInterceptor(function(elem, operation, what) {        
    if (operation === 'put') {
      elem._id = undefined;
      return elem;
    }
    return elem;
  })
  RestangularProvider.addElementTransformer('creators', true, function(creator) {

        user.addRestangularMethod('login', 'post', 'login');

        return creator;
  });
}

