angular.module('app').directive('sumava', function (sumavaSvc) {
    return {
        restrict: "A",
        templateUrl: 'sumava/sumava.html',
        link: function (scope, ele, attr) {
            scope.loading = true;
            sumavaSvc.getImage().then(function (url) {
                scope.imgUrl = url;
                scope.loading = false;
            }, function (err) {
                console.log(err);
            }, function (value) {
                console.log(value);
            });
        }
    }
});