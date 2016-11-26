
'use strict';
    (function () {

    angular
        .module('app.checkout')
        .controller('CheckoutController', CheckoutController);

    /* @ngInject */
	function CheckoutController($stateParams, $scope,  $q, logger, CoreService, $mdDialog, $mdToast){

$scope.checkIfBike = function(cartItem)
{
  if('frameColor' in cartItem.item)
  {
    return true
  }
  else {
    return false
  }
}

$scope.cart = CoreService.getCart()
console.log($scope.cart)

if(CoreService.isAuthenticated == true)
{
$scope.user = CoreService.getCurrentUser()
console.log($scope.user)
$scope.address = {mail : $scope.user.address, billing: $scope.user.address}
$scope.card = $scope.user.card
}
else {
  $scope.user = {}
  $scope.address = {mail: {}, billing: {}}
  $scope.card = {}
}
$scope.placeOrderFunc = function ()
{
  console.log($scope.cart);
  console.log($scope.card);
  
  if($scope.cardform.$invalid)
  {
    CoreService.notification("Please enter a valid card")
    return;
  }
  if($scope.cart.length == 0)
  {
    CoreService.notification("Your cart cannot be empty")
  }

}

$scope.checkIfBike = function(cartItem)
{
  if('frameColor' in cartItem.item)
  {
    return true
  }
  else {
    return false
  }
}

$scope.cancelFunc = function ()
{
  console.log('canceled order')
}
    }
})();
