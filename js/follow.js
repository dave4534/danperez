$(document).mousemove(function(event){
  $('#tail').css({
    left: event.pageX +30,
    top: event.pageY -30
  });
});