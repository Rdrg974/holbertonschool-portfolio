const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const textContent = document.getElementById('text-content');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

// Contenu des slides
const contents = [
    {
        image: 'tuto-1.png',
        text: "Each player is assigned a color and receives counters. Each is black on one side and white on the other. Black pawns start the game by placing the first pawn in a location that encloses an opponent's pawn."
    },
    {
        image: 'tuto-2.png',
        text: "The player must then flip the opponent's enclosed pawns to their color. This is repeated alternately until the entire board is filled or no more moves can be made."
    },
    {
        image: 'tuto-3.png',
        text: "The game ends when neither player can move. The winner is the player with the most pieces of their color on the board."
    }
];

let currentIndex = 0;

// Fonction pour mettre à jour le contenu du slide
function updateContent(index) {
    const { image, text } = contents[index];
    textContent.innerHTML = `
        <div class="image-container">
            <img src="${image}" alt="Tutorial Image" class="tutorial-image">
        </div>
        <p>${text}</p>
    `;
}

// Gestion des événements

// Afficher le formulaire de login
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Masquer le formulaire de login
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Afficher la fenêtre popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Fermer la fenêtre popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Bouton gauche pour le slide précédent
leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = contents.length - 1;
    }
    updateContent(currentIndex);
});

// Bouton droit pour le slide suivant
rightButton.addEventListener('click', () => {
    if (currentIndex < contents.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateContent(currentIndex);
});

// Chargement initial du contenu
updateContent(currentIndex);
