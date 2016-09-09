/**
 * Created by Nikitha on 9/7/2016.
 */

myApp.controller('withholdReportCtrl', ['$scope', '$http' ,function ($scope,$http) {

    $scope.witholdInvoiceTabs = [{
        title: '1099 Report Post/Report/Copy B',
        url: 'add.current'
    }];

    $scope.currentTab = 'add.current';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };

    $http.get('assets/data/withholdReport/withholdReportData.json').then(function(response){
        $scope.wthldAdjustmentsData = response.data;
    });

    $scope.addRow = function(){
        $scope.withholdReportData.push({
            "description" : ""
        })
    };
    $scope.deleteRow = function($index){
        $scope.withholdReportData.splice($index, 1);
    };

    $scope.run = function($index){
        alert('The Process in Running');
    };

    /* testing the git hub*/
    /* testing the git hub*/
}]);