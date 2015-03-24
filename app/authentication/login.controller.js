angular
    .module('positionApp')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$rootScope', '$location', 'Restangular', 'authService'];

function LoginController($scope, $rootScope, $location, Restangular, authService) { 
  $scope.login_user = { email: "", password: ""};
  $rootScope.isLoggedIn = false;

  $scope.login = function () {
    authService.getJwtToken($scope.login_user.email, $scope.login_user.password).then(function(response) {
    $rootScope.token = response.auth_token;
    $rootScope.isLoggedIn = true;
    $location.path('/places');
      
  }, function(response) {
      
    $rootScope.isLoggedIn = false;
    $location.path('/login');
    console.log("Error with status code", response.status);
      
  });     
  }; 
}