    'use strict';
    (function () {

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    /* @ngInject */
    function RegisterController($stateParams, $scope,  $q, logger, CoreService){


        $scope.user = {}

        //TODO validate the entries and then call the adduser function in the CoreService
        $scope.registerFunc = function()
        {
            console.log($scope.user)
            CoreService.addUser($scope.user)
            CoreService.goToHomePage()
        }
    }
})();
