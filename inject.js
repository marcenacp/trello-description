$(document).ready(function() {
  var descriptionTemplate = null;

  const fillInDescription = function() {
    chrome.storage.sync.get('descriptionTemplate', function(data) {
      descriptionTemplate = data.descriptionTemplate;
    });
    if (!descriptionTemplate)
      descriptionTemplate = "Please, first provide a template in the settings."
    $('.field').val(descriptionTemplate);
  };

  $('.window')
  .prepend('<input type="button" value="Add Description" style="padding:10px;">')
  .click(function(){
    fillInDescription();
  });
});
