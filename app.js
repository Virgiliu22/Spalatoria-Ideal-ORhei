// ===== FORM DATA PERSISTENCE =====
function setupFormPersistence(formId, fieldIds) {
  const form = document.getElementById(formId);
  if (!form) return;

  // Auto-fill from localStorage
  const forms = JSON.parse(localStorage.getItem('formSubmissions')) || [];
  const lastSubmission = forms.filter(f => f.formId === formId).pop();
  
  if (lastSubmission) {
    fieldIds.forEach(fieldName => {
      const input = document.getElementById(fieldName);
      if (input && lastSubmission.data[fieldName]) {
        input.value = lastSubmission.data[fieldName];
      }
    });
  }

  // Save on input
  fieldIds.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('input', function() {
        const formData = {};
        fieldIds.forEach(id => {
          const input = document.getElementById(id);
          if (input) formData[id] = input.value;
        });
        localStorage.setItem(`${formId}_draft`, JSON.stringify(formData));
      });
    }
  });

  // Save on submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {};
    fieldIds.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) formData[fieldId] = field.value;
    });
    
    const forms = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    forms.push({ id: Date.now(), formId, data: formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('formSubmissions', JSON.stringify(forms));
    localStorage.removeItem(`${formId}_draft`);
  });
}

// ===== LIGHTBOX FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
  // Setup form persistence
  setupFormPersistence('contact-form', ['nume', 'prenume', 'telefon', 'email']);

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  
  const lbImage = lightbox.querySelector('.lb-image');
  const btnClose = lightbox.querySelector('.lb-close');
  const btnPrev = lightbox.querySelector('.lb-prev');
  const btnNext = lightbox.querySelector('.lb-next');

  const imgs = Array.from(document.querySelectorAll('#galerie .gallery-grid img, #galerie img'));
  if (!imgs.length) return;

  let current = 0;

  function openAt(index) {
    current = (index + imgs.length) % imgs.length;
    lbImage.src = imgs[current].src;
    lbImage.alt = imgs[current].alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImage.src = '';
    document.body.style.overflow = '';
  }

  function prev() { openAt(current - 1); }
  function next() { openAt(current + 1); }

  // attach click on each gallery image
  imgs.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function (e) {
      e.preventDefault();
      openAt(i);
    });
  });

  // controls
  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);

  // click outside image closes
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target === lightbox.querySelector('.lb-viewport')) close();
  });

  // keyboard
  document.addEventListener('keydown', function (e) {
    if (lightbox.classList.contains('open')) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
  });
});