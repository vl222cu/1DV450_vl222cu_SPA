angular
    .module('positionApp')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$rootScope', '$location', 'Restangular', 'authService', 'flash'];

function LoginController($scope, $rootScope, $location, Restangular, authService, flash) { 
  $scope.login_user = { email: "", password: ""};
  $rootScope.isLoggedIn = false;
  $rootScope.justLoggedIn = false;

  $scope.login = function () {
    authService.getJwtToken($scope.login_user.email, $scope.login_user.password).then(function(response) {
    $rootScope.token = response.auth_token;
    $rootScope.isLoggedIn = true;
    $rootScope.justLoggedIn = true;
    $location.path('/places');
      
  }, function(error) {
    console.log("här");
    flash.error = 'Check your email address and password';
    console.log("Error with status code", error.status);
      
  });     
  }; 
}
