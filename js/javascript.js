function addItem(){
  var ul = document.getElementById("ul");
  var li = document.createElement("li");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "todo[]";

  li.appendChild(checkbox);
  var text = document.getElementById("newitem");
  li.appendChild(document.createTextNode(text.value));
  ul.appendChild(li);
}

var button = document.getElementById("add");
button.onclick = addItem;
