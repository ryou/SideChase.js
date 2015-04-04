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

      if (nowTop <= minTop) {
        nowTop = minTop;
      } else if (maxTop < nowTop) {
        nowTop = maxTop;
      }
      var marginTop = nowTop - minTop;

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
    });

    return (this);
  };
})(jQuery, window, document);
