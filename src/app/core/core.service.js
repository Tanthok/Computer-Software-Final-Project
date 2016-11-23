(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('CoreService', CoreService);

  /** @ngInject */
    function CoreService($http, $q, logger, $rootScope, $modal, $state, $mdToast, $cookies) {
    var users = {}
    var currentUser = null
    var currentCart = []

    var service = {
      goToProfile: goToProfile,
      logout: logout,
      addUser: addUser,
      isAuthenticated: isAuthenticated,
      login: login,
      goToCart: goToCart,
      goToHomePage: goToHomePage,
      goToBikePart: goToBikePart,
      goToCustomBike: goToCustomBike,
      notification: notification,
      goToLogin: goToLogin,
      goToRegister: goToRegister,
      getCurrentUser: getCurrentUser,
      updateUser: updateUser,
      getCart : getCart,
      updateCart : updateCart,
      addToCart: addToCart
    };

    function getCart()
    {
      return $cookies.getObject('cart')
    }
    function updateCart(cart)
    {
      $cookies.putObject('cart', cart)
    }
    function addToCart(item)
    {
      var cart = getCart()
      cart.push(item)
      updateCart(cart)
    }
    function updateUser(username, user)
    {
      setCurrentUser(user)
      users[username] = user;
    }
    function getCurrentUser()
    {
      return $cookies.getObject('user')
    }
    function setCurrentUser(user)
    {
      $cookies.putObject('user', user)
      console.log(getCurrentUser())
    }
    function notification(message)
    {
      $mdToast.show(
		    $mdToast.simple()
			.textContent(message)
			.hideDelay(3000)
			)
    }
    function goToProfile()
    {
      $state.go('profile');
    }
    function goToRegister()
    {
      $state.go('register');
    }
    function goToLogin()
    {
      $state.go('login');
    }
    function addUser(newUser)
    {
      users[newUser.username] = newUser;
      setCurrentUser(newUser)
    }

    function logout()
    {
      setCurrentUser(null)
      goToHomePage()
    }
    function login(username, password)
    {
      if( username in users && users[username].password == password)
      {
        setCurrentUser(users[username])
        return true;
      }
      else {
        return false;
      }
    }
    function isAuthenticated()
    {
      console.log($cookies.getAll())
        if (getCurrentUser() == null || getCurrentUser() == {})
        {
          console.log("soo false")
          return false;
        }
        else {
          return true
        }
    }
    function goToHomePage()
    {
      $state.go('home');
    }
    function goToCart()
    {
      $state.go('cart');
    }
    function goToBikePart(type)
    {
      $state.go('bikepart', {'type': type});
    }
    function goToCustomBike()
    {
      $state.go('custombikepage');
    }


    return service;

  }

})();
