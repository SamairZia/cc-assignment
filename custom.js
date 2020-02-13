
$('#addFilterBtn').click(function(){
  // var node = document.createElement("li");
  // var textnode = document.createTextNode("Water");
  // node.appendChild(textnode);
  // document.getElementById("filter_list").appendChild(node);

  var mainRow = document.getElementById('parent-row');

  // var main = document.createElement('div');
  // main.classList.add('main-row');

  // var a = $('#parent-row').append(mainRow);
  // a.append('<div class="inner-wrappe></div>')

  // console.log(mainRow)

  // var c = document.createElement('div');
  // c.classList.add('main-row');
  // var d = document.createTextNode('this is row');
  // c.appendChild(d);
  // mainRow.appendChild(c);

  addRow();

});

var rowaa= $(".main-row");

function addRow() {
  rowaa.clone(true, true).appendTo("#parent-row");
}