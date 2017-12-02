
$(function(){

  // Click Event
  $('#animateBtn1').click(function(){
    animate('#anim-head-1', 'zoomInRight');
    animate('#anim-body-1', 'fadeInUpBig');
    return false;
  });

  // Animate
  function animate(element, animation){
    $(element).addClass('animated ' + animation);
    var wait = setTimeout(function(){
      $(element).removeClass('animated ' + animation);
    }, 1000);
  }
});

$(function(){

  // Click Event
  $('#animateBtn2').click(function(){
    animate('#anim-head-2', 'bounce');
    animate('#anim-body-2', 'rubberBand');
    return false;
  });

  // Animate
  function animate(element, animation){
    $(element).addClass('animated ' + animation);
    var wait = setTimeout(function(){
      $(element).removeClass('animated ' + animation);
    }, 1000);
  }
});
