document.addEventListener('DOMContentLoaded', () => {
  // --- ANIMATION DES BARRES ---
  const fills = document.querySelectorAll('.progress-bar-fill');
  const animateBars = () => {
    fills.forEach(bar => {
      const target = bar.getAttribute('data-fill');
      bar.style.width = target;
    });
  };
  setTimeout(animateBars, 400);

  // --- BOUTON CV ---
  const btnCv = document.querySelector('.btn-cv');
  if (btnCv) {
    btnCv.addEventListener('mousemove', e => {
      const rect = btnCv.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btnCv.style.setProperty('--x', `${x}px`);
      btnCv.style.setProperty('--y', `${y}px`);
    });

    btnCv.addEventListener('mouseenter', () => btnCv.classList.add('hovered'));
    btnCv.addEventListener('mouseleave', () => btnCv.classList.remove('hovered'));
  }

  // --- COMPÉTENCES (modales) ---
  document.querySelectorAll('.competence-card').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'block';
    });
  });

  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
});
