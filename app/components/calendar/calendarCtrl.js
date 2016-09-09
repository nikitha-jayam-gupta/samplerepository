myApp.controller('calendarCtrl',['$scope', '$http','ngDialog', function ($scope, $http,ngDialog) {
    $scope.caledarSearchTable = false;
    $scope.hideDialog = false;
    $scope.showDiv = false;
    $scope.returnToprevious = false;
    $scope.newTabClicked = false;
    $scope.calendarTabs = [{
        title: 'Find an Existing Value',
        url: 'add.existing'
    }, {
        title: 'Add a New Value',
        url: 'add.newvalue'
    }];

    $scope.currentTab = 'add.existing';

    $scope.onClickTab = function (tab) {
        if(tab.title === 'Add a New Value')
        {
            $scope.newTabClicked = true;
            $scope.shareData = [];
        }else{
            $scope.newTabClicked = false;
        }
        $scope.currentTab = tab.url;
        console.log(tab);
    };

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };

    $http.get('assets/data/calendar/calendarDetails.json').then(function(response){
        $scope.myData = response.data;
    });

    $http.get('assets/data/calendar/adjustments.json').then(function(response){
        $scope.myData1 = response.data;
    });

    $http.get('assets/data/calendar/setid.json').then(function(response){
        $scope.setidData = response.data;
    });

    $http.get('assets/data/calendar/calendarBrief.json').then(function(response){
        $scope.calendarBrief = response.data;
    });


    $scope.searchSetid = function () {
        ngDialog.open({
            template: 'app/components/common/setIDpopup.html',

            scope: $scope
        });
    };
    
    $scope.totalSearch = function () {
        $scope.caledarSearchTable = true;
    };

    $scope.clear = function () {
        $scope.setid = '',
            $scope.calid = '',
            $scope.fiscalyr = ''
    };

    $scope.addTr = function(evtType){
        if(evtType == 'DP'){
            $scope.myData.push({Year: "",
                Period: "",
                BeginDate: "",
                EndDate : "",
                PeriodName : "",
                Abbrev : ""
            })
        }else{
            $scope.myData1.push({AdjustmentPeriod: "",
                PeriodName: "",
                Abbrevation: "",
            })
        }
    };

    $scope.deleteTr = function(evtType,$index){
        if(evtType == 'DP') {
            $scope.myData.splice($index, 1);
        }else{
            $scope.myData1.splice($index,1);
        }
    };

    $scope.save = function(){
        $window.alert("Data will be save later");
    };
    $scope.addNewValue = function (data) {
        $scope.showDiv = !$scope.showDiv;
        $scope.shareData = data;
    };
    
    $scope.close = function () {
        $scope.hideDialog = !$scope.hideDialog;
    }
    

}]);