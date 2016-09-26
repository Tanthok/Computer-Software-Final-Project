(function() {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/404';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [{
      state: '404',
      config: {
        url: '/404',
        templateUrl: 'app/core/404.html',
        title: '404'
      }
    }, {
      // core routes are loaded before others soooo... we can add profile here
      // and the router will try and resolve against this first.
      state: 'profile',
      config: {
        url: '/profile/:id',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        title: 'Profile'
      }
    }, {
      state: 'upload',
      config: {
        url: '/upload?guid',
        templateUrl: 'app/upload/upload.html',
        controller: 'UploadController',
        controllerAs: 'vm',
        title: 'Upload'
      }
    }];
  }
})();
