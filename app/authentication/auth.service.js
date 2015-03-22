angular
    .module('positionApp')
    .factory('authService', authService);

authService.$inject = ['Restangular'];

function authService(Restangular) {
  return {
    getJwtToken: getJwtToken
  };
  
  function getJwtToken() {
    return Restangular.one("auth").customPOST(
      {email: arguments[0], password: arguments[1]},
      '',
      {},
      {}
    )
    .then(getJwtTokenComplete)
    .catch(getJwtTokenFailed);
    
    function getJwtTokenComplete(response) {
      return response;
    }
    
    function getJwtTokenFailed(error) {
      console.log("Error with status code", error.status);
    }
  }
}