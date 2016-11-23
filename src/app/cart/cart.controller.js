
'use strict';
    (function () {

    angular
        .module('app.cart')
        .controller('CartController', CartController);

    /* @ngInject */
	function CartController($stateParams, $scope,  $q, logger, CoreService, $mdDialog, $mdToast){
            var imagePath = 'assets/images/angular.png';

	    $scope.removeFromCart = function(ev, index, item)
	    {
		console.log("this shit was clicked " + index)
		var confirm = $mdDialog.confirm()
          .title('Remove Item')
          .textContent('Would you like to remove item from cart?')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');

		$mdDialog.show(confirm).then(function() {
      $scope.cart.splice(index, 1)
      CoreService.updateCart($scope.cart)
		    $mdToast.show(
			$mdToast.simple()
			    .textContent("Item was removed from cart")
		    );
		}, function() {
		$mdToast.show(
			$mdToast.simple()
			    .textContent("Item was not removed from cart")
		);
		});
	    }

	    $scope.changeQuantity = function(ev, item) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'assets/templates/addItemToCart.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
	fullscreen: false, // Only for -xs, -sm breakpoints.
	locals: {
	    item : item
	}
    })
    .then(function() {
      $mdToast.show(
		    $mdToast.simple()
			.textContent("Item was added to cart")
			.hideDelay(3000)
			)
    }, function() {
      $mdToast.show(
		    $mdToast.simple()
			.textContent("Item was not added to cart")
			.hideDelay(3000)
			)
    });
  };


$scope.cart = CoreService.getCart()

        $scope.loginFunc = function()
        {
            console.log($scope.user)
        }
	    function DialogController($scope, $mdDialog, $mdToast, item) {
		$scope.myForm = {}
		$scope.quantity = 1
		$scope.item = item
		console.log(item)
		$scope.validate = function()
		{
		    $mdDialog.hide()
		}


    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
    }
})();
