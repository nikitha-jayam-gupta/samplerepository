'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap','ngDialog'])
    .controller('TabsCtrl', ['$scope', function ($scope) {
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/calendarurl', {
                templateUrl: 'app/components/calendar/calendar1.html'
            })
            .when('/withholdRule', {
              templateUrl: 'app/components/withholdRule/withholdRule.html'
            })
            .when('/vendor', {
                templateUrl: 'app/components/vendorCategories/vendorcategory.html'
            })
            .when('/withholdType', {
                templateUrl: 'app/components/withholdType/withholdType.html'
            })
            .when('/searchwthld', {
                templateUrl: 'app/components/searchwthldCode/searchwthldCode.html'
            })
            .when('/payerdata', {
                templateUrl: 'app/components/payerData/payerData.html'
            })
            .when('/wvendorUpdate', {
                templateUrl: 'app/components/vendorUpdate/wthdvendorupdate.html'
            })
            .when('/withholdEntity', {
                templateUrl: 'app/components/withHoldEntity/withHoldEntity.html'
            })
            .when('/supplierInfo', {
                    templateUrl: 'app/components/supplier/SupplierInfo.html'
            })
            .when('/paymentPost', {
                templateUrl: 'app/components/paymentPost/paymentPost.html'
            })
            .when('/postWithHolding', {
                templateUrl: 'app/components/postWithHolding/postWithHolding.html'
            })
            .when('/postupdate', {
                templateUrl: 'app/components/postWithHolding/postWithHoldingUpdate.html'
            })
            .when('/withholdsent', {
                templateUrl: 'app/components/postWithHolding/withHoldSent.html'
            })
            .when('/1099vouchers', {
                templateUrl: 'app/components/1099Vouchers/1099Vouchers.html'
            })
            .when('/venderVouchers', {
                templateUrl: 'app/components/vendorVouchers/vendorVouchers.html'
            })
            .when('/paymentsInquiry', {
                templateUrl: 'app/components/paymentsInquiry/paymentsInquiry.html'
            })
            .when('/vendorClass', {
                templateUrl: 'app/components/vendorClass/vendorClass.html'
            })
            .when('/wthldAdjustments', {
                templateUrl: 'app/components/wthldAdjustments/wthldAdjustments.html'
            })
            .when('/wthldInvoice', {
                templateUrl: 'app/components/wthldInvoice/wthldInvoice.html'
            })
            .when('/wthldReport', {
                templateUrl: 'app/components/wthldReport/wthldReport.html'
            })
            .when('/withholdCode', {
                templateUrl: 'app/components/withholdCode/withholdCode.html'
            })
            .when('/vupdate', {
                templateUrl: 'app/components/vendorUpdate/wthdvendorupdate.html'
            })
            .when('/withholdingVInfo', {
                templateUrl: 'app/components/withHoldingVendorInfo/withholdingVendorInfo.html'
            })


    });
