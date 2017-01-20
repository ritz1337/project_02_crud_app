console.log('hi');

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();


var $deleteButton = $('.removebutton')
var $updateButton = $('.updatebutton')

// try to refactor for any page instead of just politics
var removeOpinion = function(evt) {
  evt.stopPropagation();
  // console.log(evt.target)
  // var id = $(evt.target).closest('div.removebutton').siblings('.hiddenid').html();
  // console.log(id);
  var cardClasses = $(evt.target).closest('.card');
  var dbID = cardClasses.attr('class').split(' ')[3];
  console.log(dbID); //gives db id

  $.post('/opinion/' + dbID + '/delete', function(response) {
    if (response.status === 200) {
      evt.target.closest('.card').remove();
    }
  })
}

var updateOpinion = function(evt) {
  evt. stopPropagation();

}






$('.container').on('click', '.removebutton', removeOpinion);
$('.container').on('click', '.updatebutton', updateOpinion);

