    'use strict';
    (function () {

    angular
        .module('app.bikepart')
        .controller('BikePartController', BikePartController);

    /* @ngInject */
    function BikePartController($stateParams, $scope,  $q, logger, CoreService){
        var imagePath = 'assets/images/angular.png';


        $scope.addToCart = function(item)
        {
            console.log(item)
        }
        $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '4:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: ' Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li n',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];

        $scope.loginFunc = function()
        {
            console.log($scope.user)
        }
    }
})();
