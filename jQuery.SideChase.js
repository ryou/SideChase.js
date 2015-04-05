;(function($, win, doc){

  $.fn.SideChase = function(container, options) {

    var defaults = {
      container       : container,
      bottomMargin    : 0,
      animate         : true,
      animateDuration : 500
    };
    var setting = $.extend(defaults, options);

    var $side      = $(this);
    var $container = $(setting.container);

    $(win).scroll(function() {

      // containerの高さ
      var contH  = $container.outerHeight();

      // ブラウザの高さ、及び上端、下端の座標
      var winH      = $(win).height();
      var nowTop    = $(win).scrollTop();
      var nowBottom = nowTop + winH;

      // Sideの高さ、及び上端、下端の座標
      var sideH      = $side.outerHeight();
      var sideTop    = $side.offset().top;
      var sideBottom = sideTop + sideH;

      // Sideの移動可能範囲
      var minTop = $container.offset().top;
      var maxTop = minTop + contH - sideH - setting.bottomMargin;

      // ブラウザ上端がSideより上、又はブラウザ下端がSide下端より下の時だけ
      // 移動処理を行う。
      // (Sideがブラウザよりでかい場合の対策)
      if (nowTop < sideTop || sideBottom < nowBottom) {
        var newSideTop = nowTop;

        // Sideがブラウザよりでかい場合、Sideが下へ動く処理の際は
        // Sideの下端がブラウザの下端に沿うように動かす。
        if (winH < sideH) {
          if (sideBottom < nowBottom) {
            newSideTop = nowBottom - sideH;
          }
        }

        // Sideをcontainer内に納める処理
        if (nowTop <= minTop) {
          newSideTop = minTop;
        } else if (maxTop < nowTop) {
          newSideTop = maxTop;
        }
        var marginTop = newSideTop - minTop;

        // 移動処理
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
