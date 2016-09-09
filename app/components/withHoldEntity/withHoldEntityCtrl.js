/**
 * Created by Nikitha on 8/18/2016.
 */

myApp.controller('withholdEntityCtrl', ['$scope', '$http' ,function ($scope,$http) {
    $scope.withholdFlag = false;
    $scope.wihthholdVisibiliy = true;

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
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };

    $scope.withholdEntityTabs = [{
        title: 'Withholding Entity',
        url: 'add.withholdentity'
    }];

    $scope.currentTab1 = 'add.withholdentity';


    $scope.onClickTab = function (tabs) {
        $scope.currentTab1 = tabs.url;
    };

    $scope.isActiveTab = function(tabsUrl) {
        return tabsUrl == $scope.currentTab1;
    };

    $scope.totalSearch = function () {
        $scope.withholdFlag = true;
    };
    $scope.clear = function () {
        $scope.withholdFlag = false;
    };

    $scope.withholdingpage = function () {
        $scope.wihthholdVisibiliy = !$scope.wihthholdVisibiliy;
    };

    $scope.returntoSearch = function () {
        $scope.wihthholdVisibiliy = !$scope.wihthholdVisibiliy;
    };

    $http.get('assets/data/withholdentity/withholdentityType.json').then(function(response){
        $scope.withholdentityData = response.data;
        console.log($scope.withholdData);
    });

}]);

myApp.controller('employeeCtrl', function($scope, $http) {
    $http.get('assets/data/withholdentity/withholding.json')
        .then(function (response) {$scope.names = response.data;
        });

    $scope.addRow = function(){
        $scope.names.push({
            "setid" : "",
            "sname" : "",
            "vendor":"",
            "name" : "",
            "location":"",
            "description":"",
            "Address":""
        });
        console.log('example');
    };

    $scope.deleteRow = function($index){
        $scope.names.splice($index, 1);
    }
});

myApp.controller('categoryCtrl', function($scope, $http) {
    $http.get('assets/data/withholdentity/categorywithholding.json')
        .then(function (response) {$scope.names = response.data;
        });

    $scope.addRow = function(){
        $scope.names.push({
            "setid" : "",
            "sname" : "",
            "vendor":"",
            "name" : "",
            "location":"",
            "description":"",
            "Address":""
        });
        console.log('example');
    };

    $scope.deleteRow = function($index){
        $scope.names.splice($index, 1);
    }

});


myApp.controller('TabsCls', ['$scope', function ($scope) {
    console.log('inner tab');
    $scope.tabs = [{
        title: 'Main Information',
        url: 'add.subtab'
    }, {
        title: 'Additional info',
        url: 'add.info'
    }];

    $scope.currentTab = 'add.subtab';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);

myApp.controller('TabsCls', ['$scope', function ($scope) {
    console.log('inner tab');
    $scope.tabs = [{
        title: 'Main Information',
        url: 'add.subtab'
    }, {
        title: 'Additional info',
        url: 'add.info'
    }];

    $scope.currentTab = 'add.subtab';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);

