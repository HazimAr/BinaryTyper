/**
 * @name BinaryTyper
 * @author Zim#0003
 * @authorId 682715516456140838
 * @version 0.0.3
 * @description When you hit F4, it will covert your current message into binary. But you need to hit space before you send because discord is stupid.
 * @invite school
 * @website https://webdefy.tech
 * @source https://github.com/HazimAr/BinaryTyper
 * @updateUrl https://raw.githubusercontent.com/HazimAr/BinaryTyper/main/BinaryTyper.plugin.js
 */

module.exports = class BinaryTyper {
  load() {}
  start() {
    function textToBinary(text) {
      return text
        .split("")
        .map(function (c) {
          return c.charCodeAt(0).toString(2);
        })
        .join(" ");
    }

    function convertMessageToBinary() {
      const textArea = document.getElementsByClassName(
        "markup-2BOw-j slateTextArea-1Mkdgw"
      )[0];

      const children = [...textArea.children];
      console.log(children);

      for (let i = 0; i < children.length; i++) {
        const message =
          children[i].firstElementChild.firstElementChild.firstElementChild
            .innerHTML;

        if (textToBinary(message.split("<br>")[0]) != "1111111011111111") {
          children[
            i
          ].firstElementChild.firstElementChild.firstElementChild.innerHTML = textToBinary(
            message.split("<br>")[0]
          );
        }
      }
    }

    function binaryToText(binary) {
      return binary
        .split(" ")
        .map(function (c) {
          return String.fromCharCode(parseInt(c, 2));
        })
        .join("");
    }

    function convertBinaryToText() {
      const textArea = document.getElementsByClassName(
        "markup-2BOw-j slateTextArea-1Mkdgw"
      )[0];
      const children = [...textArea.children];
      console.log(children);

      for (let i = 0; i < children.length; i++) {
        const message =
          children[i].firstElementChild.firstElementChild.firstElementChild
            .innerHTML;

        if (binaryToText(message.split("<br>")[0]) != "") {
          children[
            i
          ].firstElementChild.firstElementChild.firstElementChild.innerHTML = binaryToText(
            message.split("<br>")[0]
          );
        }
      }
    }

    document.addEventListener("keydown", function (e) {
      if (e.key == "F4") {
        convertMessageToBinary();
      } else if (e.key == "F5") {
        convertBinaryToText();
      }
    });

    // console.log(textArea.children);
  }
  stop() {}
};
