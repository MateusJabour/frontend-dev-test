(function(window, document, Cakemail) {
  'use strict';

  function listOfEmojis () {
    var emojiList = [], i;
    // Emojis separated by groups, since each has different code sequences
    //
    // Emoticons
    for(i = 128512; i <= 128591; i++) {
      emojiList.push(new Cakemail.Emoji(i));
    }
    //Dingbats
    for(i = 9984; i <= 10175; i++) {
      emojiList.push(new Cakemail.Emoji(i));
    }
    //Transport and map symbols
    for(i = 128640; i <= 128767; i++) {
      emojiList.push(new Cakemail.Emoji(i));
    }
    //Enclosed characters
    for(i = 9312; i <= 9471; i++) {
      emojiList.push(new Cakemail.Emoji(i));
    }
    //Uncategorized
    for(i = 128; i <= 255; i++) {
      emojiList.push(new Cakemail.Emoji(i));
    }
    //Other additional symbols
    for(i = 127744; i <= 128511; i++) {
      emojiList.push(new Cakemail.Emoji(i));
    }

    return emojiList;
  }

  function showTooltip (event) {
    var caretPosition = window.getSelection().anchorOffset;
    var tooltip = new Cakemail.Tooltip (event.pageX, event.pageY);
    var caretData = window.getSelection().anchorNode.data;
    populateTooltip(tooltip, this, caretPosition, caretData);
  }

  function populateTooltip (tooltip, node, caretPosition, caretData) {
    tooltip.addContent('ul', 'tooltip__emoji-menu', 'emoji-menu', listOfEmojis().map(addEmojisToList).join(''));
    tooltip.moveTooltip();
    $('[data-js="emoji-menu"]').children().on('click', writeEmoji(tooltip, node, caretPosition, caretData));
  }

  function addEmojisToList (emoji) {
    return emoji.createEmojiIcon().outerHTML;
  }

  function writeEmoji (tooltip, node, caretPosition, caretData) {
    return function (event) {
      event.preventDefault();
      insertEmoji.call($(this), node, node.innerHTML, caretPosition, caretData);
      tooltip.hideTooltip();
    };
  }

  function insertEmoji (node, nodeText, caretPosition, caretData) {
    var modifiedData =  caretData.substring(0, caretPosition) + this.text() + caretData.substring(caretPosition);
    var dataStartIndex = nodeText.indexOf(caretData);
    node.innerHTML =  nodeText.substring(0, dataStartIndex) + modifiedData + nodeText.substring(caretData.length + dataStartIndex);
  }

  $('[data-js="editable-div"]').children().on('click', showTooltip);

})(window, document, Cakemail);
