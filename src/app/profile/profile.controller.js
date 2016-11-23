    'use strict';
    (function () {

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController($stateParams, $scope,  $q, logger, CoreService){


        $scope.user = CoreService.getCurrentUser()

        //TODO validate the entries and then call the adduser function in the CoreService
        $scope.updateFunc = function()
        {
            console.log($scope.user)
            CoreService.updateUser($scope.user.username, $scope.user)
            CoreService.goToHomePage()
        }
        $scope.cancelFunc = function()
        {
          CoreService.goToHomePage()
        }
    }
})();
