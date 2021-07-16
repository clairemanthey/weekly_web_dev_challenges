
let btnSubmit = document.getElementById("btnSubmit");
let modalSubmit = document.getElementById("modalSubmit");
let spanSubmit = document.getElementById("closeS");
 
btnSubmit.onclick = function() {
  modalSubmit.style.display = "block";
};

spanSubmit.onclick = function() {
  modalSubmit.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalSubmit) {
    modalSubmit.style.display = "none";
  }
};




let btnCancel = document.getElementById("cancelBtn");
let modalCancel = document.getElementById("cancelModal");
let spanCancel = document.getElementById("closeC");
 
btnCancel.onclick = function() {
  modalCancel.style.display = "block";
};

spanCancel.onclick = function() {
  modalCancel.style.display = "none";
};

window.onclick = function(modalCancel) {
  if (event.target == modalCancel) {
    modalCancel.style.display = "none";
  }
};


