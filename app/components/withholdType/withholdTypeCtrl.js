/**
 * Created by swathigubba on 8/11/16.
 */


myApp.controller('withholdtypeCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $scope.showDiv = false;
    $scope.newTabClicked = false;
    $scope.wihthholdTypeTabs = [{
        title: 'Find an Existing Value',
        url: 'add.existing'
    }, {
        title: 'Add a New Value',
        url: 'add.newvalue'
    }];

    $scope.currentTab = 'add.existing';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
        $scope.data = null;
        if(tab.title === 'Add a New Value')
        {
            $scope.newTabClicked = true;
        }else{
            $scope.newTabClicked = false;
        }
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };


    $http.get('assets/data/withhold/withholdType.json').then(function(response){
        $scope.withholdTypeData = response.data;
        console.log($scope.withholdTypeData);
    });

    $http.get('assets/data/vendor/vendorCategories.json').then(function(response){
        $scope.withholdTypeFullData = response.data;
        console.log(response.data)
    });

    $scope.addRow = function(){
        $scope.withholdTypeData.push({
            "class" : "",
            "Description" : "",
            "contractReference":"",
            "Active" : ""
        })
    };
    $scope.totalSearch = function () {
        $scope.withholdFlag = true;
    };
    $scope.deleteRow = function($index){
        $scope.withholdTypeData.splice($index, 1);
    };
    $scope.withholdClick = function (whData) {
        $scope.showDiv = !$scope.showDiv;
        $scope.data = whData;
    }
}]);