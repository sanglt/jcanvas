(function ($) {
  // Canvas Class
  var jCanvasClass = function () {
    this.support = false;
    this.getSupport(); // Check and add support
  }

  jCanvasClass.prototype.getSupport = function () {
    /**
     * Detect canvas support
     */
    function canvasSupport() {
      return !!document.createElement('canvas').getContext;
    }

    /**
     * Detect canvastext support
     */
    function canvasTextSupport() {
      if (!canvasSupport()) {return false;}
      var dummy_canvas = document.createElement('canvas');
      var context = dummy_canvas.getContext('2d');
      return typeof context.fillText == 'function';
    }

    /**
     * Detect video support
     */
    function videoSupport() {
      return !!document.createElement('video').canPlayType;
    }
    
    // Add more properties for $.support
    $.extend($.support, {
      canvas: canvasSupport(),
      canvasText: canvasTextSupport(),
      video: videoSupport()
    });
  }

  $.extend($.fn, {
    'canvas': function () {
      return this.each(function () {
        var canvas = new jCanvasClass();
      });
    }
  });
})(jQuery);
