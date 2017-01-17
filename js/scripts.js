$(function() {
  //space to write and see code easier









  //
  var onlyDigitRegEx = /^\d+$/;
  var add = function(n1, n2) {
    return n1 + n2;
  }
  $("form").submit(function(event) {
    var inputNumberOne = $("input#number-one").val();
    var inputNumberTwo = $("input#number-two").val();
    if (onlyDigitRegEx.test(inputNumberOne) && onlyDigitRegEx.test(inputNumberTwo)) {
      alert(inputNumberOne);
      alert(inputNumberTwo);
      event.preventDefault();

      inputNumberTwo = parseInt(inputNumberTwo);
      inputNumberOne = parseInt(inputNumberOne);
      for (var i = inputNumberTwo; i <= inputNumberOne; i = i + inputNumberTwo) {
        $("#output-stream").append(i + ", ");
      }
    } else {
      alert("INVALID INPUT");
    }
  })
})
