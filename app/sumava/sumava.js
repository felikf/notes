'use strict';

function $sumavaSvc($q, sumavaResource) {
    //80/160/640/1024
    var url = 'http://sumavaeu.humlnet.cz/preview/201601/1024/libinprach/';

    function getImg() {
        return sumavaResource.getDocument().$promise.then(function (document) {
            return url + angular.element(document.contents).find('a').last().attr('href');
        });
    }

    return {
        getImage: getImg
    };

}

angular.module('app').factory('sumavaSvc', ['$q', 'sumavaResource',  $sumavaSvc]);

