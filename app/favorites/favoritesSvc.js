'use strict';

function $favoritesSvc($q) {

    function getFavorites() {
        var favorites;

        if (!localStorage.favorites) {
            favorites = [];
        } else {
            favorites = JSON.parse(localStorage.favorites);
        }

        return sortFavorites(favorites);
    }

    function saveFavorites(favorites) {
        localStorage.favorites = JSON.stringify(favorites);
    }

    function getFavorite(favorites, text) {
        var found = favorites.filter(function (favorite) {
            return favorite.text === text;
        });

        return found ? found[0] : null;
    }

    function addFavorite(text, href) {
        var favorites = getFavorites();
        var favorite = getFavorite(favorites, text);

        if (favorite) {
            favorite.count++;
        } else {
            favorites.push({
                text: text,
                href: href,
                count: 1
            });
        }

        saveFavorites(favorites);
    }

    function removeFavorite(text) {
        var favorites = getFavorites();
        favorites = favorites.filter(function (favorite) {
            return favorite.text !== text;
        });
        saveFavorites(favorites);

        return getFavorites();
    }

    function sortFavorites(favorites) {
        return favorites.sort(function sort(a, b) {
            return b.count - a.count;
        });
    }

    return {
        getFavorites: getFavorites,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

}

angular.module('app').factory('favoritesSvc', ['$q', $favoritesSvc]);

