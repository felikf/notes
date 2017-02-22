
function toggle_visibility(id)
{
    var e = document.getElementById(id);
    if ( e.style.display == 'block' )
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function selectText(id) {
    var doc = document;
    var text = doc.getElementById(id);
    selectTextEl(text);
}

function selectTextEl(text) {
    var doc = document;

    if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        var range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function collapseAll() {
    $('.divBlockContent').hide();
}

function expandAll() {
    $('.divBlockContent').show();
}

var show_delay = 0;
var hide_delay = 0;

$(document).ready(function() {

    $('table.selectable td').click(function(event) {
        selectTextEl(event.target)
    });
    $('#privateKeyOpener').click(function(event) {
        setTimeout(function() {
            $('#privateKey').toggle(500);
            selectText('privateKey');
        }, 0);
    });

    collapseAll();
    $('.divNadpis').click(function(e) {
        e.stopPropagation();
        collapseAll();
        jQuery(this).parent().children('.divBlockContent').toggle(hide_delay);
    });

    $('.main').show(show_delay);
//        $('.codar').show(show_delay);
//        $('.csa').show(show_delay);
//        $('.csa421').show(show_delay);
    $('.csa460').show(show_delay);
    $('.favorites').show(show_delay);
//        $('.linux').show(show_delay);
    $(window).keypress(function(e){

        if((e.which == 61 && e.ctrlKey) || (e.which == 43 && e.ctrlKey)){
            //Ctrl + "+" is pressed, 61 is for =/+ anr 43 is for Numpad + key
        }

    });

    $(window).keypress(function(e){
        //console.log(e.which);

        if((e.which == 61) || (e.which == 43)){
            //Ctrl + "+" is pressed, 61 is for =/+ anr 43 is for Numpad + key
            expandAll();
        } else if(e.which == 45){
            collapseAll();
        }

    });

});