angular
    .module('viDirective', [])
    .directive('viFooter', viFooter);

function viFooter() {
    var directive = {
        restrict: "A",
        template: "<div id='viFooter'><p>Application is developed by {{creator.firstName}} {{creator.lastName}} &copy; 2015</p></div>",
        controller: FooterController
    };

    return directive;
}

FooterController.$inject = ['$scope'];

function FooterController($scope) {
  $scope.creator = {
    firstName: "Vivi",
    lastName: "Lam"
  };  
} 
