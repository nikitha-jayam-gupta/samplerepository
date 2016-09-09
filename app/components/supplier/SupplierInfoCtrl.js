/**
 * Created by Nikitha on 8/22/2016.
 */
myApp.controller('supplierCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $scope.supplierFlag = false;
    $scope.supplierVisibility = true;
    $scope.supplierTabs = [{
        title: 'Find an Existing Value',
        url: 'add.existing'
    }, {
        title: 'Add a New Value',
        url: 'add.newvalue'
    }];

    $scope.currentTab = 'add.existing';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };

    $scope.totalSearch = function () {
        $scope.supplierFlag = true;
    };

    $scope.clear = function () {
        $scope.supplierFlag = false;
    };
    $http.get('assets/data/supplier/supplierdata.json').then(function(response){
        $scope.supplierData = response.data;
    });

    $scope.supplierDetailsPage = function (sData) {
        $scope.supplierVisibility = !$scope.supplierVisibility;
        $scope.sData = sData;
    };

    $scope.infoTabs = [{
        title: 'Summary',
        url: 'add.summary'
    }, {
        title: 'Identifying information',
        url: 'add.information'
    },{
        title: 'Address',
        url: 'add.address'
    },{
        title: 'Contacts',
        url: 'add.contacts'
    },{
        title: 'Location',
        url: 'add.location'
    },{
        title: 'Custom',
        url: 'add.custom'
    }];

    $scope.activeTab = 'add.summary';

    $scope.onClickTab = function (tab) {
        $scope.activeTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.activeTab;
    };

    $scope.returntoSearch = function () {
        $scope.supplierVisibility = !$scope.supplierVisibility;
    };

    $scope.expandCollapseCtrl = function () {
        $scope.active = true;
        $scope.active1 = true;
    };

    $scope.expandAll = function(val) {
        alert('expand all');
    };

    $scope.collapseAll = function(val) {
        alert('Collapse all');
    }


}]);


