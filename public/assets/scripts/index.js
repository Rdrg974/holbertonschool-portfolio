document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('page-footer');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        // Gérer la visibilité du header
        if (window.scrollY === 0) {
            header.classList.remove('hidden');
        } else {
            header.classList.add('hidden');
        }

        // Gérer la visibilité du footer
        if (window.scrollY > lastScrollY || window.scrollY === 0) {
            // Scrolling down or at top
            footer.classList.add('hidden');
        } else {
            // Scrolling up
            footer.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    window.addEventListener('wheel', (event) => {
        if ((window.scrollY === 0 && event.deltaY < 0) ||
            (window.innerHeight + window.scrollY >= document.body.offsetHeight && event.deltaY > 0)) {
            event.preventDefault();
        }
    }, { passive: false });
});
