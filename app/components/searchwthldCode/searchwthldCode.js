/**
 * Created by swathigubba on 8/11/16.
 */


myApp.controller('searchTabsCtrl', ['$scope', '$http', function ($scope,$http) {
    console.log("Hello");
    $scope.tabs = [{
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

    $scope.search=function(){
        $scope.IsVisible = $scope.IsVisible ? false : true;
    };
    $http.get('assets/data/searchWthld/search.json')
        .then(function (response) {$scope.names = response.data;
            console.log("dd"+$scope.names);
        });
}]);




