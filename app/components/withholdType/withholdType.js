/**
 * Created by swathigubba on 8/11/16.
 */


myApp.controller('withholdtypeCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/withhold/withholdType.json').then(function(response){
        $scope.withholdTypeData = response.data;
        console.log($scope.withholdTypeData);
    });

    $scope.addRow = function(){
        $scope.withholdTypeData.push({
            "class" : "",
            "Description" : "",
            "contractReference":"",
            "Active" : ""
        })
    };

    $scope.deleteRow = function($index){
        $scope.withholdTypeData.splice($index, 1);
    }
}]);