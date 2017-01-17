$(function() {
  var clearOutputText = function() {
    (".output-stream-word-hide").text("");
  }
  var vowelReplacer = function(str) {
    //clearOutputText();
    for (var i = 0; i < str.length; i++) {
      var test = str.charAt(i).toUpperCase();
      switch (test) {
        case "A":
        case "E":
        case "I":
        case "U":
        case "O":
          //  alert("test text @ index " + i);
          var subStr1 = str.substring(0, i);
          //alert(subStr1);
          var subStr2 = "-"
          var subStr3 = str.substring(i + 1, str.length);
          //alert(subStr1);
          str = subStr1 + subStr2 + subStr3;
          break;
        default:
      }
    }
    return str;
  }
  $("form").submit(function(event) {
    var inputText = $("input#user-text-input").val();
    $(".output-stream-word-hide").text(vowelReplacer(inputText));
    event.preventDefault();
  });
})
