angular.module('app').directive('favorites', function (favoritesSvc) {
    return {
        restrict: "A",
        templateUrl: 'favorites/favorites.html',
        link: function (scope, ele, attr) {
            angular.element('a').click(function (event) {
                var text = event.target.text;
                var href = event.target.getAttribute('href');
                favoritesSvc.addFavorite(text, href);
            });

            scope.favorites = favoritesSvc.getFavorites();
            scope.removeFavorite = function (text) {
                scope.favorites = favoritesSvc.removeFavorite(text);
            };
        }
    }
});