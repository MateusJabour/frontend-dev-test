(function(window, document, Cakemail) {
  'use strict';
  
  function Tooltip (positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.tooltip = $('<div class="tooltip" data-js="tooltip"><div class="tooltip__arrow"></div><div class="tooltip__content"></div></div>');
  }

  Tooltip.prototype = {
    isThereAnyTooltip: function () {
      return $('.tooltip').length  === 1;
    },

    moveTooltip: function () {
      if( this.isThereAnyTooltip ) {
        $('[data-js="tooltip"]').remove();
      }
      $('body').append(this.tooltip);
      $('[data-js="tooltip"]').css( {left: this.positionX - 110.5, top: this.positionY + 40} );
    },

    addContent: function (tag, className, datajs, content) {
      var newItem = $('<' + tag + ' class=\"' + className + '\" data-js=\"' + datajs + '\">' + content + '</' + tag + '>');
      this.tooltip.children('.tooltip__content').append(newItem);
    },

    hideTooltip: function  () {
      this.tooltip.css({'display': 'none'});
    }
  };

  Cakemail.Tooltip = Tooltip;

})(window, document, Cakemail);
