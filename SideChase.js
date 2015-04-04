;(function($, win, doc){

  $.fn.SideChase = function(options) {

    var defaults = {
      container       : '#Contents',
      bottomMargin    : 0,
      animate         : true,
      animateDuration : 500
    };
    var setting = $.extend(defaults, options);

    var $container = $(setting.container);
    var $side      = $(this);

    $(win).scroll(function() {
      var sideH  = $side.outerHeight();
      var contH  = $container.outerHeight();
      var minTop = $container.offset().top;
      var maxTop = minTop + contH - sideH - setting.bottomMargin;
      var nowTop = $(win).scrollTop();

      var winH = $(win).height();
      var nowBottom  = nowTop + winH;
      var sideTop    = $side.offset().top;
      var sideBottom = sideTop + sideH;

      //ブラウザ上端が、Side上端より下、かつ、ブラウザ下端がSide下端より上なら
      //Sideを動かさない
      //逆にいうと、Side上端より上、または、Side下端より下なら動かす
      if (nowTop < sideTop || sideBottom < nowBottom) {
        var marginTop = 0;

        if (winH < sideH) {
          if (nowTop < sideTop) {
            //上端に揃える
          } else {
            //下端に揃える
            nowTop = nowBottom - sideH;
          }
        }

        if (nowTop <= minTop) {
          nowTop = minTop;
        } else if (maxTop < nowTop) {
          nowTop = maxTop;
        }
        marginTop = nowTop - minTop;

        if (setting.animate) {
          $side.animate({
            'margin-top': marginTop + 'px'
          }, {
            duration: setting.animateDuration,
            queue: false
          });
        } else {
          $side.css('margin-top', marginTop + 'px');
        }
      }

    });

    return (this);
  };
})(jQuery, window, document);
