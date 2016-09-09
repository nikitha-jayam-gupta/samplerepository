/**
 * Created by swathigubba on 8/18/16.
 */


/**
 * Created by swathigubba on 8/9/16.
 */

myApp.controller('withholdCodeCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $scope.withholdFlag = false;
    $scope.showDiv = false;
    $scope.newTabClicked = false;
    $scope.wihthholdCodeTabs = [{
        title: 'Find an Existing Value',
        url: 'add.existing'
    }, {
        title: 'Add a New Value',
        url: 'add.newvalue'
    }];

    $scope.currentTab = 'add.existing';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
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

    $scope.totalSearch = function () {
        $scope.withholdFlag = true;
    };

    $http.get('assets/data/withhold/withholdcode.json').then(function(response){
        $scope.withholdCodeData = response.data;
    });

    $http.get('assets/data/withhold/withholdcodetable.json').then(function(response){
        $scope.withholdFullCode = response.data;
    });

    $scope.addRow = function(){
        $scope.withholdData.push({
            "Entity" : "",
            "Type" : "",
            "WithholdDesc":"",
            "Jurisdiction" : "",
            "JurDesc" : "",
            "Class":"",
            "Desc" : ""
        })
    };

    $scope.deleteRow = function($index){
        $scope.withholdData.splice($index, 1);
    };

    $scope.withholdClick = function (whData) {
        $scope.showDiv = !$scope.showDiv;
        $scope.data = whData;
    }
}]);

