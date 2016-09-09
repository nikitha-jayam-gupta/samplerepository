/**
 * Created by Nikitha on 9/7/2016.
 */

myApp.controller('withholdInvoice', ['$scope', '$http' ,function ($scope,$http) {

    $scope.witholdInvoiceTabs = [{
        title: 'Current Withhold Details',
        url: 'add.current'
    }, {
        title: 'New Withhold Details',
        url: 'add.newvalue'
    }];

    $scope.currentTab = 'add.current';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }


}]);