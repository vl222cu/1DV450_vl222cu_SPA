angular
    .module('positionApp')
    .controller('LogoutController', LogoutController);

LogoutController.$inject = ['$scope', '$rootScope', '$location'];

function LogoutController($scope, $rootScope, $location) { 
  $rootScope.token = "";
  $rootScope.isLoggedIn = false;
  $rootScope.error = false;
  $rootScope.success = false;
}