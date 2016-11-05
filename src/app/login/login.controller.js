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
        }
    }
})();
