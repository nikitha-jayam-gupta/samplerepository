/**
 * Created by Nikitha on 9/7/2016.
 */

myApp.controller('vendorClassCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/vendorClass/vendorClassDate.json').then(function(response){
        $scope.vendorClassData = response.data;
    });
}]);