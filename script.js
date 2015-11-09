$(function() {
  var notesArr = []

  //Have to first check if localStorage.notes exists.
  if(localStorage.notes) {
    //Creates array of values using localStorage.notes
    var saved = localStorage.notes.split(",");

    //Appends each array item to the unordered list
    for (i = 0; i < saved.length; i++) {
      $('<li>' + saved[i] + '</li>').appendTo('#notelist');
    };
  };

  //Prevents button click from refreshing page
  $('form').submit(function(e) {
    return false;
  });

  $('button').on('click', function() {

    //Check if browser supports local storage
    if (typeof(Storage) !== 'undefined') {
      var note = $("input[name='new-note']").val();
      //Push localStorage.notes to notesArr. Without this line, array empties with each form submit.
      notesArr.push(localStorage.notes);
      notesArr.push(note);
      $('<li>'+note+'</li>').appendTo('#notelist');

      //Save notesArr to localStorage
      localStorage.setItem('notes', notesArr);
    }

    else {
      alert('Sorry. Your browser doesn\'t support web storage.')
    }
  });
});
