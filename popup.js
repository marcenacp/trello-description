$(document).ready(function() {
  var freezeButtons = function(isFrozen) {
    $('#saveButton').prop('disabled', isFrozen);
    $('#showButton').prop('disabled', isFrozen);
  };

  $("#templateText").on('keyup', function () {
    if ($(this).val().length > 0) {
      $('#templateTextBefore').text('');
    } else {
      $('#templateTextBefore').text('Copy/paste your template...');
    }
  });

  $('#saveButton').click(function(){
    freezeButtons(true);
    const descriptionTemplate = $('#templateText').val();
    chrome.storage.sync.set({descriptionTemplate: descriptionTemplate}, function() {
      freezeButtons(false);
    });
  });

  $('#showButton').click(function(){
    freezeButtons(true);
    chrome.storage.sync.get('descriptionTemplate', function(data) {
      $('#templateText').val(data.descriptionTemplate);
      freezeButtons(false);
    });
  });
});
