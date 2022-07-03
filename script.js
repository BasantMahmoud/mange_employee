// CRUD operations in JavaScript
// 1- setup variables

var removeBtn = document.querySelector(".remove_btn");
var addBtn = document.querySelector(".add_btn");
var table_body = document.getElementsByTagName("tbody");
var add_btn = document.querySelector("#addRow");
var full_name = document.getElementById("fullName");
var city_name = document.getElementById("city");
var email_name = document.getElementById("email");
var employee_list = document.getElementById("employee_list");

//2-start
var selectedRow = null;

//add data from the form to table

// function addRow() {
//   var formData = readFormData();
//   if (selectedRow == null) insertNewRow(formData);
//   else updateRecord(formData);
//   resetForm();
//   event.preventDefault();
// }

function addRow() {
  var formData = {};
  formData["fullName"] = full_name.value;
  formData["city"] = city_name.value;
  formData["email"] = email_name.value;

  if (selectedRow == null) insertNewRow(formData);
  else updateRecord(formData);
  resetForm();
  event.preventDefault();
}

// event.preventDefault();

addBtn.addEventListener("click", addRow);
add_btn.addEventListener("click", addRow);

//function that read data from form to be added to table

// function readFormData() {
//   var formData = {};
//   formData["fullName"] = full_name.value;
//   formData["city"] = city_name.value;
//   formData["email"] = email_name.value;

//   return formData;
// }

//insert new row to table

function insertNewRow(data) {
  //determine the position of the row
  var table = employee_list;
  table_body[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.city;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = `<a onClick="onEdit(this)" ><i class="far fa-edit" style="color:#f2ea0a;margin-right:30px;cursor:pointer;fontSize:40px;"></i></a>
                     <a onClick="onDelete(this)"><i class="fas fa-trash" style="fontSize:40px; cursor:pointer"></i></a>`;
}
// change style of edit and delete
var edit_btn = document.getElementsByClassName("fa-edit");
var delete_btn = document.getElementsByClassName("fa-trash");
// edit_btn.style.Color = "yellow";
// delete_btn.style.fontSize = "40px";
//reset form

function resetForm() {
  full_name.value = "";
  city_name.value = "";
  email_name.value = "";
  selectedRow = null;
}

//edit function

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  full_name.value = selectedRow.cells[0].innerHTML;
  city_name.value = selectedRow.cells[1].innerHTML;
  email_name.value = selectedRow.cells[2].innerHTML;
}

//update row

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.city;
  selectedRow.cells[2].innerHTML = formData.email;
}

//delete function

function onDelete(td) {
  if (confirm("Are you sure to delete this employee ?")) {
    row = td.parentElement.parentElement;
    employee_list.deleteRow(row.rowIndex);
    resetForm();
  }
}
