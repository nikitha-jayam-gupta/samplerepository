/**
 * Created by swathigubba on 8/11/16.
 */

myApp.controller('vendorctrl', ['$scope', '$http' ,function ($scope,$http) {
    $scope.vendorTable = false;
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

    $http.get('assets/data/vendor/vendorCategory.json').then(function(response){
        $scope.vendorData = response.data;
        console.log($scope.vendorData);
    });

    $http.get('assets/data/vendor/vendorCategories.json').then(function(response){
        $scope.vendorcategoryData = response.data;
        console.log($scope.vendorcategoryData);
    });

    $scope.totalSearch = function () {
        $scope.vendorTable = true;
    };

    $scope.vendorClick = function (vData) {
        $scope.toggleDiv = !$scope.toggleDiv;
        $scope.vData = vData;
    };

    $scope.returnSearch = function () {
        $scope.toggleDiv = !$scope.toggleDiv;
    };

    $scope.addRow = function(){
        $scope.vendorData.push({
            "FromBasicAmt" : "",
            "ToBasicAmt" : "",
            "PercentWithheld":"",
            "AdditionalAmt" : ""
        })
    };
    $scope.deleteRow = function($index){
        $scope.vendorData.splice($index, 1);
    }

}]);
