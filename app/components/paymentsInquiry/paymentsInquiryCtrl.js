/**
 * Created by Nikitha on 9/2/2016.
 */

myApp.controller('paymentsInquiryctrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/paymentsInquiry/paymentsDate.json').then(function(response){
        $scope.paymentsInquiryData = response.data;
    });

    $scope.resetSearch = function () {
        $scope.vsetID = "";
        $scope.vID = "";
        $scope.vName = "";
        $scope.tvendorID = "";
        $scope.tvendorName = "";
        $scope.fDate = "";
        $scope.tDate = "";
    }

}]);