"use strict";

if (!localStorage.speeches) {
    var speeches = new Array();
} else {
    var speeches = JSON.parse(localStorage.speeches);
};

function Speech (title,speech) {
    this.title = title;
    this.speech = speech;
    this.dateEdit = new Date().getTime();
};

function addToList () {
    length = speeches.length;

    $('#speechList').html('');

    for (var i = 0; i < length; i++) {
        $('#speechList').append("<a class='list-group-item search'>" + (i+1) + '. ' + speeches[i].title + "</a>");
    }

    if (length == 0 || length == undefined) {
        $('#speechList').parent().append("<span>None yet!</span>");
    }
}

$(document).ready(function(){
    $('#saveSpeech').click(function(){
        var speechTitle = $('#speechTitle').val();
        var speechContents = $('#speechContents').val().replace(/\n\r?/g, '<br />');
        var successful = 0;

        if (!speechTitle) {
            $('#speechTitle').parent().addClass('has-error');
        } else {
            successful++;
            $('#speechTitle').parent().removeClass('has-error');
        }

        if (!speechContents) {
            $('#speechContents').parent().addClass('has-error');
        } else {
            successful++;
            $('#speechContents').parent().removeClass('has-error');
        }

        if (successful == 2) {
            var speechToSave = new Speech(speechTitle,speechContents);
            speeches.push(speechToSave);
            localStorage.setItem('speeches', JSON.stringify(speeches));
            $('#speechTitle, #speechContents').val('');
            addToList();
        }
    });

    addToList();

    $('.search').click(function(){
        var text = $(this).text().split('.');
        var currentSpeech = speeches[text[0]-1].speech;
        localStorage.setItem('currentSpeech', currentSpeech);
        console.log(currentSpeech);
    });
});
