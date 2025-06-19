document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('main section');

  function showSection(id) {
    sections.forEach(section => {
      if (section.id === id) {
        section.classList.remove('hidden-section');
      } else {
        section.classList.add('hidden-section');
      }
    });
  }
/*
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Mise à jour classe active sur le menu
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });
*/
  // Affichage initial (intro visible)
  showSection('intro');
  const fills = document.querySelectorAll('.progress-bar-fill');

const animateBars = () => {
  fills.forEach(bar => {
    const target = bar.getAttribute('data-fill');
    bar.style.width = target;
  });
};

// Tu peux appeler l'animation juste après DOMContentLoaded
setTimeout(animateBars, 400);

});
