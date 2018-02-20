
function GetSelectedValue(e){
  var valueSelected = document.getElementById('option').value;
  alert(valueSelected);
  console.log(valueSelected);

  // Prevent form from submitting
  e.preventDefault();
}
