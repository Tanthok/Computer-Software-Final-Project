(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('CoreService', CoreService);

  /** @ngInject */
  function CoreService($http, $q, logger, $rootScope, $modal, $state) {
    var scannedData = {};

    var service = {
      getVideos: getVideos,
      getVideo: getVideo,
      getComments: getComments,
      getChannels: getChannels,
      getTags: getTags,
      likeVideo: likeVideo,
      dislikeVideo: dislikeVideo,
      submitComment: submitComment,
      incrementViews: incrementViews,
      searchVideos: searchVideos,
      getSkuInfo: getSkuInfo,
      setScannedData: setScannedData,
      getScannedData: getScannedData,
      getAbuse: getAbuse,
      postAbuse: postAbuse,
      deleteVideo: deleteVideo,
      editVideo: editVideo,
      getLikedByUserId: getLikedByUserId,
      testCall: testCall,
      getMainPage: getMainPage,
      getExtractTable: getExtractTable,
      getMainFunctionChart: getMainFunctionChart,
      getJobHistory: getJobHistory,
      getFunctions: getFunctions,
      goToHomePage: goToHomePage,
      goToUsage: goToUsage
    };

    function getFunctions(job)
    {
      return $http.get('rs/function', {params: {'job': job}}).then(success)
    }

    function getJobHistory(range, project, height)
    {
      if(range == null || range == '')
      {
        range = 'month';
      }
      return $http.get('rs/usage3', {params: {'range': range, 'projectId': project, 'windowHeight' : height}}).then(success)
    }
    function testCall()
    {
      return  $http.get('rs/hi').then(success);
    }

    function getMainPage(range)
    {
      if( range == null || range == '')
      {
        range = 'week';
      }
      return $http.get('rs/', {params:{'range': range}}).then(success);
    }

    function getMainFunctionChart(job)
    {
      return $http.get('rs/mainfunction',{params:{'job': job}}).then(success)
    }

    function getExtractTable(job, range)
    {
      return $http.get('rs/extract', {params:{'job': job, 'range': range}}).then(success)
    }

    function goToHomePage()
    {
      $state.go('home');
      console.log("returning to the maker boyyzzzz");
    }

    function goToUsage(project_id)
    {
      console.log('blah')
      $state.go('usage', {'projectId': project_id});
    }

    function setScannedData(data) {
      scannedData = data;
    }

    function getScannedData() {
      return scannedData;
    }

    function success(response) {
      return response.data;
    };

    function getVideos(channelName, q, start, userId, likes) {
      if (likes == true || likes == 'true') {
        return getLikedByUserId(userId, start);
      }

      if (q != null) {
        return searchVideos(q, start);
      }

      var params = {
        startIndex: start
      }

      if(channelName) params.channel = channelName;
      if(userId) params.userId = userId;

      return $http.get('rs/content/main', {
          params: params
        })
        .then(success);
    };

    function searchVideos(searchQuery, start) {
      return $http.get('rs/search?q=' + searchQuery + '&startIndex=' + start).then(success);
    };

    function getVideo(guid) {
      return $http.get('rs/content/video/' + guid)
        .then(success);
    };

    function getSkuInfo(sku) {
      return $http.get('rs/search/skuInfo?skunumber=' + sku)
        .then(function(response) {
          setScannedData = response.data;
          return setScannedData;
        });
    };

    function getComments(guid) {
      return $http.get('rs/content/comments/' + guid)
        .then(success);
    };

    function getChannels() {
      return $http.get('rs/content/channels')
        .then(success);
    };

    function getTags(guid) {
      return $http.get('rs/content/tags')
        .then(success);
    };

    function likeVideo(guid) {
      var deferred = $q.defer();

      $http.post('rs/content/like/' + guid, {
        liked: true
      }).then(function(result) {
        $rootScope.$broadcast('likedVideo', result.data);
      }, function(error) {
        openLogin(error);
        deferred.reject(error);
      });
      return deferred.promise;
    };

    function dislikeVideo(guid) {
      var deferred = $q.defer();

      $http.post('rs/content/like/' + guid, {
        liked: false
      }).then(function(result) {
        $rootScope.$broadcast('likedVideo', result.data);
      }, function(error) {
        openLogin(error);
        deferred.reject(error);
      });
      return deferred.promise;
    };

    function submitComment(guid, comment) {
      var deferred = $q.defer();

      $http.post('rs/content/comment/' + guid, {
        comment: comment
      }).then(function(result) {
        $rootScope.$broadcast('reloadComments', result.data);
        deferred.resolve(result);
      }, function(error) {
        openLogin(error);
        deferred.reject(error);
      });

      return deferred.promise;
    };

    function incrementViews(guid) {
      return $http.post('rs/content/views/' + guid);
    }

    function openLogin(error) {
      if (error.status == 401) {
        var modalInstance = $modal.open({
          templateUrl: 'app/widgets/mt-login-view/mt-login-view.view.html',
          controller: 'mtLoginViewController'
        });
      }

    };

    function getAbuse() {
      return $http.get('rs/content/abuse').then(success);
    };

    function getLikedByUserId(userId, start) {
      return $http.get('rs/content/liked?userId=' + userId + '&startIndex=' + start).then(success);
    };

    function postAbuse(abuse) {
      return $http.post('rs/content/abuse', abuse);
    };

    function deleteVideo(guid) {
      return $http.post('rs/content/delete/' + guid).then(success);
    }

    function editVideo(guid, data) {
        var deferred = $q.defer();

        $http.post('rs/content/edit/' + guid, data).then(function(result) {
          deferred.resolve(result);
        }, function(error) {
          openLogin(error);
          deferred.reject(error);
        });

        return deferred.promise;
//      return $http.post('rs/content/edit/' + guid, data).then(success);
    }

    return service;

  }

})();
