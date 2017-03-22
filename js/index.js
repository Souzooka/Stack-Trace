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

    for (var i = length; i > 0; i--) {
      document.querySelector("#output").innerHTML += llist.get(i-1).value + "<br>";
    }
  });



};