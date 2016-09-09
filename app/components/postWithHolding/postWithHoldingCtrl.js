/**
 * Created by Nikitha on 9/1/2016.
 */


myApp.controller('postwithholdingctrl', ['$scope', '$http' ,function ($scope,$http) {
    $scope.paymentTable = false;
    $scope.toggleDiv = false;
    $scope.vendorTabs = [{
        title: 'Find an Existing Value',
        url: 'add.existing'
    }];

    $scope.currentTab = 'add.existing';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };


    $http.get('assets/data/postWithHolding/postWithHolding.json').then(function(response){
        $scope.postWithholdingData = response.data;
        console.log($scope.vendorcategoryData);
    });

    $scope.totalSearch = function () {
        $scope.paymentTable = true;
    };

    $scope.postwitholdingrClick = function (vData) {
        $scope.toggleDiv = !$scope.toggleDiv;
        $scope.vData = vData;
    };

    $scope.returnSearch = function () {
        $scope.toggleDiv = !$scope.toggleDiv;
    };

    $scope.clear = function () {
        $scope.paymentTable = false;
    };
    $scope.addRow = function(){
        $scope.postWithholdingData.push({
            "bUnit" : "",
            "Description" : ""
        })
    };
    $scope.deleteRow = function($index){
        $scope.postWithholdingData.splice($index, 1);
    };
    $scope.run = function() {
        alert('Posting Request Is Running')
    };

}]);
