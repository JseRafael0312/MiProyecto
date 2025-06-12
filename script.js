// Activa o desactiva campos según checkbox seleccionado
function toggleField(id) {
  const field = document.getElementById(id + "-row");
  field.style.display = field.style.display === "none" ? "flex" : "none";
}

// Modal para enviar oferta
function openModal(producto) {
  document.getElementById("productoModal").textContent = "Para: " + producto;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function sendOffer() {
  alert("¡Oferta enviada exitosamente! 📨");
  closeModal();
}