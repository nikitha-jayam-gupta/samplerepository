/**
 * Created by Nikitha on 9/2/2016.
 */

myApp.controller('vendorVouchersctrl', ['$scope', '$http' ,function ($scope,$http) {
    $http.get('assets/data/voucherVendor/voucherVendorData.json').then(function(response){
        $scope.vendorVouchersData = response.data;
    });

}]);
