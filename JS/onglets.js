// Récupération de tous les éléments avec la classe .tab-list
const tabListElements = document.querySelectorAll('.tab-list');

// Parcours de tous les éléments .tab-list
tabListElements.forEach((tabListElement) => {
  // Récupération des liens dans la tabList
  const tabLinks = tabListElement.querySelectorAll('li');

  // Parcours de tous les liens
  tabLinks.forEach((tabLink) => {
    // Ajout d'un écouteur d'événement sur chaque lien
    tabLink.addEventListener('click', (event) => {
      // Récupération de l'élément cible
      const targetSelector = event.currentTarget.dataset.target;
      const targetElement = document.querySelector(targetSelector);

      // Récupération de l'élément parent
      const parentElement = targetElement.closest('.tab-content');

      // Si l'élément cible n'est pas déjà actif
      if (!targetElement.classList.contains('active')) {
        // Désactivation de l'élément actif et de son lien correspondant
        const activeElement = parentElement.querySelector('.tab-pane.active');
        const activeLink = tabListElement.querySelector('li.active');

        activeElement.classList.remove('active');
        activeLink.classList.remove('active');

        // Activation de l'élément cible et de son lien correspondant
        targetElement.classList.add('active');
        tabLink.classList.add('active');
      }
    });
  });
});
