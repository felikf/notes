//80/160/640/1024
var url = 'http://sumavaeu.humlnet.cz/preview/201601/1024/libinprach/';
//        $.getJSON('http://anyorigin.com/get?url=' + url + '&callback=?', function(data){
//
//        });

/*$('.sumava').addClass('loader');
 $('.sumavaContainer').addClass('loaderContainer');
 $('.sumava').show(show_delay);*/
$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
    var imgName = $(data.contents).find('a').last().attr('href');
    var src = url + imgName;
    $('.sumavaContainer').append($('<img>',{id:'theImg',src:src, width:320}))
    $('.sumavaContainer').removeClass('loader');
    /*$('.sumavaContainer').removeClass('loaderContainer');*/
});