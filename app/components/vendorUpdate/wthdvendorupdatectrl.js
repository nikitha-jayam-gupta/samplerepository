/**
 * Created by swathigubba on 8/16/16.
 */

myApp.controller('vendorupdatectrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/vendorupdate/vendorUpdate.json').then(function(response){
        $scope.vendorupdateData = response.data;
        // console.log($scope.vendorData);
    });

    $scope.addRow = function(){
        $scope.vendorupdateData.push({
            "vendorId" : "",
            "location" : "",
            "newWithhold":"",
            "entity" : "",
            "newType" : "",
            "newJurCD" : "",
            "newClass":"",
            "criteria" : ""
        })
    };
    $scope.deleteRow = function($index){
        $scope.vendorupdateData.splice($index, 1);
    }

}]);