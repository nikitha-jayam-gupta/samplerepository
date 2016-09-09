/**
 * Created by Nikitha on 9/1/2016.
 */

myApp.controller('paymentPostctrl', ['$scope', '$http' ,function ($scope,$http) {
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

    $http.get('assets/data/payment/PaymentPosting.json').then(function(response){
        $scope.paymentPostData = response.data;
    });

    $scope.totalSearch = function () {
        $scope.paymentTable = true;
    };

    $scope.paymentClick = function (vData) {
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
        $scope.paymentPostData.push({
            "setID" : "",
            "bCode" : "",
            "bAccount":"",
            "paymentMethod" : "",
            "paymentReference":""
        })
    };
    $scope.deleteRow = function($index){
        $scope.paymentPostData.splice($index, 1);
    };

    $scope.run = function() {
        alert('Posting Request Is Running')
    };
}]);
