document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".section");
    const sectionsB = document.querySelectorAll(".sectionB");

    // Funkcja aktywująca wybraną sekcję
    function activateSection(targetId) {
        // Ukryj wszystkie sekcje
        sections.forEach(section => section.classList.remove("visible"));
        sectionsB.forEach(section => section.classList.remove("visible"));

        // Aktywuj wybraną sekcję
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("visible");
        }

        // Przewiń do odpowiedniej sekcji
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Deaktywuj wszystkie linki
        menuLinks.forEach(link => link.classList.remove("active"));

        // Aktywuj kliknięty link
        document.querySelector(`.navbar a[href="#${targetId}"]`).classList.add("active");
    }

    // Nasłuchiwanie na kliknięcia w menu
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            activateSection(targetId);
        });
    });

    // Domyślnie aktywuj pierwszą sekcję
    activateSection('home');
});