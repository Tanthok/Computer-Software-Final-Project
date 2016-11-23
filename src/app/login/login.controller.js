    'use strict';
    (function () {

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($stateParams, $scope,  $q, logger, CoreService){


        $scope.user = {}

        $scope.loginFunc = function()
        {
            console.log($scope.user)
            var result = CoreService.login($scope.user.username, $scope.user.password)
            if(result == true)
            {
              CoreService.notification('succesful login');
              CoreService.goToHomePage();
            }
            else {
              CoreService.notification('unsuccesful login');
            }
          }
    }
})();
