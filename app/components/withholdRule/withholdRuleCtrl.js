
/**
 * Created by swathigubba on 8/9/16.
 */

myApp.controller('withholdCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $scope.withholdFlag = false;
    $scope.showDiv = false;
    $scope.newTabClicked = false;
    $scope.wihthholdRulesTabs = [{
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

    $http.get('assets/data/withhold/withholdrule.json').then(function(response){
        $scope.withholdData = response.data;
        console.log($scope.withholdData);
    });

    $http.get('assets/data/withhold/withholdallrule.json').then(function(response){
        $scope.withholdFullData = response.data;
    });

    $scope.addRow = function(){
            $scope.withholdData.push({
                "FromBasicAmt" : "",
                "ToBasicAmt" : "",
                "PercentWithheld":"",
                "AdditionalAmt" : ""
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
