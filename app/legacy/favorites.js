$('a').click(function (event) {
    var text = event.target.text;
    var href = event.target.getAttribute('href');

    var favorites;

    if (!localStorage.favorites) {
        favorites = {};
    } else {
        favorites = JSON.parse(localStorage.favorites);
    }

    var clicked = favorites[text];

    if (clicked) {
        clicked.count++;
    } else {
        favorites[text] = {
            text: text,
            href: href,
            count: 1
        };
    }

    localStorage.favorites = JSON.stringify(favorites);

});

function sortFavorites(favorites) {
    var keys = Object.keys(favorites);

    var arrFav = [];
    keys.forEach(function (key) {
        arrFav.push(favorites[key]);
    });

    arrFav.sort(function sort(a, b) {
        return b.count - a.count;
    });

    return arrFav.reduce(function(acc, b){
        acc[b.text] = b;
        return acc;
    }, {});
}

function addFavLink(value) {
    if (!value  ||  !value.text  ||  !value.href.startsWith('http')) {
        return;
    }

    var link = "<li><a href='" + value.href + "'>" + value.text + "</a></li>";
    $('.favorites').append(link);
}

function appendFavorites() {
    var keys = Object.keys(favorites);

    $('.favorites').append("<ul>");
    keys.forEach(function (key) {
        addFavLink(favorites[key]);
    });
    $('.favorites').append("</ul>");
}

if (localStorage.favorites) {
    var favorites = JSON.parse(localStorage.favorites);

    favorites = sortFavorites(favorites);

    appendFavorites(favorites);
}
