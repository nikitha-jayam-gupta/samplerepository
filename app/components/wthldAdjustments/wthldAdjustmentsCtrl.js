/**
 * Created by Nikitha on 9/7/2016.
 */

myApp.controller('wthldAdjustmentsCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/wthldAdjustments/wthldAdjustmentsData.json').then(function(response){
        $scope.wthldAdjustmentsData = response.data;
    });

    $scope.addRow = function(){
        $scope.wthldAdjustmentsData.push({
            "bUnit" : "",
            "vID" : "",
            "paymentCount":"",
            "entity" : "",
            "newType":"",
            "newJurCD":"",
            "newClass":""
        })
    };
    $scope.deleteRow = function($index){
        $scope.wthldAdjustmentsData.splice($index, 1);
    }

}]);