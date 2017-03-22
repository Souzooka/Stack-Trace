window.onload = function() {
  var llist = linkedListGenerator();

  document.querySelector("#save").addEventListener("click", function() {
    if (document.querySelector("#input").value !== "") {
      llist.add(document.querySelector("#input").value);
      document.querySelector("#input").value = "";
    }
  });

  document.querySelector("#dump").addEventListener("click", function() {
    let length = llist.getLength();
    let output = document.querySelector("#output");

    output.innerHTML = "";

    for (var i = length; i > 0; i--) {
      output.innerHTML += "<li>" + llist.get(i-1).value + "</li>";
    }

    output.innerHTML = "<ol type=\"1\">" + output.innerHTML + "</ol>";
  });



};