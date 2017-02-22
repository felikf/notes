'use strict';

function sumavaResource1($resource) {
    //80/160/640/1024
    var url = 'http://sumavaeu.humlnet.cz/preview/201601/1024/libinprach/';
    var proxyUrl = 'http://whateverorigin.org/get?url=' + encodeURIComponent(url);

    var resource = $resource(
        proxyUrl,
        {
            callback: "JSON_CALLBACK"
        },
        {
            getDocument: {
                method: "JSONP",
                isArray: false
                //tracker: 'sumava'
            }
        }
    );

    //var deferred = $q.defer();
    //
    //$.getJSON(proxyUrl, function(data) {
    //    var imgName = $(data.contents).find('a').last().attr('href');
    //    deferred.resolve(url + imgName);
    //});
    //
    //return deferred.promise;

    return resource;
}

angular.module('app').factory('sumavaResource', ['$resource', sumavaResource1]);