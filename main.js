// Validación de Bootstrap en el formulario de contacto y modal de proyecto
(() => {
  'use strict';
  const form = document.getElementById('form-contacto');
  const ok = document.getElementById('mensaje-ok');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      ok.classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
    } else {
      ok.classList.add('d-none');
      form.classList.add('was-validated');
      form.querySelector(':invalid').focus();
    }
  });

  const modal = document.getElementById('modal-proyecto');
  modal.addEventListener('show.bs.modal', (e) => {
    const b = e.relatedTarget;
    modal.querySelector('.modal-title').textContent = b.dataset.titulo;
    modal.querySelector('.modal-texto').textContent = b.dataset.detalle;
  });
})();
