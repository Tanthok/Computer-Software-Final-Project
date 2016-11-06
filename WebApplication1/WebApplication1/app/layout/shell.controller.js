(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    /* @ngInject */
    function ShellController($rootScope, $scope, $timeout, config, logger, USER_ROLES, $modal, CoreService, $state, AnalyticsHelper, $window) {

        var vm = this;

        vm.busyMessage = 'Please wait ...';

        vm.callSomething = callSomething;

        vm.testResponse = "";


        $rootScope.showSplash = true;

        $scope.goToExtract = goToExtract;
        $scope.goToFunctions = CoreService.goToFunctions;
        $scope.callSomething = callSomething;
        $scope.goToHomePage = CoreService.goToHomePage;
        $scope.goToUsage = goToUsage;
        $scope.goToDurations = goToDurations;

        vm.customer_scoring = 'customer_scoring'
        vm.srof = 'srof'
        vm.volume_codes = 'volume_codes'
        vm.holding_capacity = 'holding_capacity'
        vm.analytics_merch_prod = 'analytics-merch-prod19090328'
        vm.ea = 'ea19090210'
        vm.edw_dev = 'edw-dev19090000'

        vm.navline = {
            title: config.appTitle,
            text: 'Created by Pat Woowong',
            link: 'http://analytics-dashboard-dot-ea19090210.appspot.com/'
        };

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            // CoreService.testCall().then(function(data) {
            //   if (data != null && data != '') {
            //     vm.testResponse = data.hey;
            //   }
            // });

            return;
        };

        function callSomething() {
          logger.success("I did some shit.");
        };
        function goToExtract(job) {
          var range = 'week'
          $state.go('extracts', {jobname: job, range: range})
        };
        function goToUsage(projectId)
        {
          //console.log('The projectId is:' + projectId)
          //console.log('The range is:' + range)
          $state.go('usage', {projectId: projectId});
          console.log('this is being called')
          $window.reload()
        }

        function goToDurations(job)
        {
          console.log('goToDurations got called');
          $state.go('durations', {job: job});
        }
    }
})();
