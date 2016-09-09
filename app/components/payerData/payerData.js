
/**
 * Created by swathigubba on 8/11/16.
 */

myApp.controller('payerDataCtrl',['$scope', '$http','$window', function ($scope, $http,$window) {
    $scope.submitForm = function(evt){
        $window.alert("Payer Data will be saved later");
    }
}]);



