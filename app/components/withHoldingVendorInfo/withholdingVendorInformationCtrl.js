/**
 * Created by swathigubba on 8/16/16.
 */

myApp.controller('whVInfoCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/wthVendorInfo/wthVendorInfo.json').then(function(response){
        $scope.vendorinfoData = response.data;
         console.log($scope.vendorinfoData);
    });

    // $scope.addRow = function(){
    //     $scope.vendorupdateData.push({
    //         "vendorId" : "",
    //         "location" : "",
    //         "newWithhold":"",
    //         "entity" : "",
    //         "newType" : "",
    //         "newJurCD" : "",
    //         "newClass":"",
    //         "criteria" : ""
    //     })
    // }
    // $scope.deleteRow = function($index){
    //     $scope.vendorupdateData.splice($index, 1);
    // }

}]);