// On récupère tous les éléments avec la classe .tooltip
const tooltips = document.querySelectorAll('.tooltip');

// On boucle sur chaque élément .tooltip
tooltips.forEach((tooltip) => {
  // On ajoute un écouteur d'événement pour le survol de la souris
  tooltip.addEventListener('mouseover', (event) => {
    // On récupère l'attribut title de l'élément
    const tooltipText = event.target.getAttribute('title');
    // On récupère l'attribut data-placement de l'élément
    const tooltipPlacement = event.target.getAttribute('data-placement');

    // Si l'élément a un attribut title et data-placement
    if (tooltipText && tooltipPlacement) {
      // On crée un nouvel élément span pour afficher le texte de l'info-bulle
      const tooltipSpan = document.createElement('span');
      tooltipSpan.classList.add('tooltip-text');
      tooltipSpan.textContent = tooltipText;
      tooltipSpan.setAttribute('data-placement', tooltipPlacement);

      // On ajoute le span à l'élément parent
      event.target.appendChild(tooltipSpan);

      // On cache l'attribut title
      event.target.setAttribute('data-tooltip', tooltipText);
      event.target.removeAttribute('title');

      // On positionne l'info-bulle en fonction de la valeur de data-placement
      switch (tooltipPlacement) {
        case 'right':
          tooltipSpan.style.left = `${event.target.offsetWidth}px`;
          tooltipSpan.style.top = '50%';
          tooltipSpan.style.transform = 'translateY(-50%)';
          break;
        case 'left':
          tooltipSpan.style.right = `${event.target.offsetWidth}px`;
          tooltipSpan.style.top = '50%';
          tooltipSpan.style.transform = 'translateY(-50%)';
          break;
        case 'top':
          tooltipSpan.style.left = '50%';
          tooltipSpan.style.bottom = `${event.target.offsetHeight}px`;
          tooltipSpan.style.transform = 'translateX(-50%)';
          break;
        case 'bottom':
          tooltipSpan.style.left = '50%';
          tooltipSpan.style.top = `${event.target.offsetHeight}px`;
          tooltipSpan.style.transform = 'translateX(-50%)';
          break;
        default:
          break;
      }
    }
  });

  // On ajoute un écouteur d'événement pour la sortie du survol de la souris
  tooltip.addEventListener('mouseout', (event) => {
    // On récupère le span créé précédemment
    const tooltipSpan = event.target.querySelector('.tooltip-text');
    // Si le span existe
    if (tooltipSpan) {
      // On le retire de l'élément parent
      event.target.removeChild(tooltipSpan);
      // On réaffiche l'attribut title
      const tooltipText = event.target.getAttribute('data-tooltip');
      event.target.setAttribute('title', tooltipText);
      event.target.removeAttribute('data-tooltip');
    }
  });
});
