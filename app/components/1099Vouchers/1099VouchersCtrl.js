/**
 * Created by Nikitha on 9/2/2016.
 */

myApp.controller('vouchersctrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/1099Vouchers/1099VouchersData.json').then(function(response){
        $scope.vouchersData = response.data;
        // console.log($scope.vendorData);
    });

    $scope.addRow = function(){
        $scope.vouchersData.push({
            "entity" : "",
            "type" : "",
            "jurisdiction":"",
            "class" : "",
            "amount" : "",
            "contract" : "",
            "rule":"",
            "witholding" : ""
        })
    };
    $scope.deleteRow = function($index){
        $scope.vouchersData.splice($index, 1);
    }

}]);