
$('#addFilterBtn').click(function(){
  addRow();

});

var rows= $(".main-row");

function addRow() {
  rows.clone(true, true).appendTo("#parent-row");
}