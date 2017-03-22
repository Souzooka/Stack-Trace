window.onload = function() {
  var llist = linkedListGenerator();

  document.querySelector("#save").addEventListener("click", function() {
    if (document.querySelector("#input").value !== "") {
      llist.add(document.querySelector("#input").value);
    }
  });

  document.querySelector("#dump")



};