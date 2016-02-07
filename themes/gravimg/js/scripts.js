$(document).ready(function() {
  $.adaptiveBackground.run({
    selector: '.adaptive-background'
  });

  $('.images').flexslider({
    selector: '.item',
    slideshow: false,
  });

  $('.img').on('ab-color-found', function(ev,payload){
    var classes = $(this).attr("class");

    var shadowColor = (tinycolor(payload.palette[0]).isLight) ? tinycolor(payload.palette[0]).darken(amount = 80).setAlpha(0.5).toRgbString() : tinycolor(payload.palette[0]).darken(amount = 10).setAlpha(0.5).toString();

    $(this).parent().css({
      "background-color" : payload.color,
    });
    $(this).find('img').css("box-shadow", "0px 6px 20px " + shadowColor);
    $(this).parent().addClass(classes)
    $(this).parent().removeClass('img');
  });
});
