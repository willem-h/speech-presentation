$(document).ready(function(){
    $('body').html('');
    var speech = localStorage.currentSpeech;
    speech = speech.split('<br /><br />');
    var length = speech.length;

    for (var i = 0; i < length; i++) {
        $('body').append('<div class="panel panel-default col-xs-6 speech"><div class="panel-body">' + speech[i] + '</div></div>');
    };
});
