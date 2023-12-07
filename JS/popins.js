window.onload = () => {
    // Masquer les popins par défaut
    const popins = document.querySelectorAll(".modal");
    popins.forEach(popin => {
        popin.style.display = "none";
    });

    // Ouvrir la popin au clic sur le bouton
    const buttons = document.querySelectorAll("[data-target]");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            const popin = document.querySelector(target);
            popin.style.display = "block";

            // Fermer la popin en appuyant sur Echap
            document.addEventListener("keydown", event => {
                if (event.keyCode === 27) {
                    popin.style.display = "none";
                }
            });

            // Fermer la popin en cliquant en dehors
            popin.addEventListener("click", event => {
                if (event.target === popin) {
                    popin.style.display = "none";
                }
            });

            // Fermer la popin en cliquant sur le bouton .popin-dismiss
            const dismissButton = popin.querySelector(".popin-dismiss");
            if (dismissButton) {
                dismissButton.addEventListener("click", () => {
                    popin.style.display = "none";
                });
            }
        });
    });

}
