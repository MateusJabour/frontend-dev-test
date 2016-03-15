(function(window, document, Cakemail) {
  'use strict';
  
  function Emoji(code) {
    this.code = code;
  }

  Emoji.prototype = {
    createEmojiIcon: function () {
      var listItem = document.createElement('li');
      listItem.setAttribute('class', 'tooltip__emoji-icon');
      listItem.insertAdjacentHTML('beforeend', '<a href="#" class="tooltip__emoji">&#'+ this.code + '</a>');
      return listItem;
    }
  };

  Cakemail.Emoji = Emoji;

})(window, document, Cakemail);
