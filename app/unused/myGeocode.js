'use strict';

var app = angular.module('ahealthynetworkApp.directives', []);
    app.directive('myGeocode', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/newlocation.html',
            scope: {
                center: '=',
                markers: '=',
                width: '@',
                height: '@',
                zoom: '@', 
                mapTypeId: '@'
                },
            link: function (scope, element, attrs) {
                var toResize, toCenter;
                var map;
                var currentMarkers;

                var arr = ["width", "height", "markers", "mapTypeId"];
                    for (var i = 0, cnt = arr.length; i < arr.length; i++) {
                scope.$watch(arr[i], function () {
                        if (--cnt <= 0)
                        updateMap();
                    });
                }
                scope.$watch("zoom", function () {
                    if (map && scope.zoom)
                        map.setZoom(scope.zoom * 1);
                    });
                scope.$watch("center", function () {
                    if (map && scope.center)
                        map.setCenter(getLocation(scope.center));
                });
               };