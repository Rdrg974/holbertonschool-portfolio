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
        image: 'tuto-2.jpg',
        text: "To 'enclose' a disc means to surround one or more of your opponent's pieces with two of your own."
    },
    {
        image: 'tuto-3.jpg',
        text: "All black pawns between the two white pawns are then flipped over (captured), showing their white side. A piece can capture any number of the opponent's pieces (diagonally, horizontally or vertically)."
    },
    {
        image: 'tuto-4.jpg',
        text: "If a player cannot enclose at least one of his opponent's pawns, he is forced to skip his turn. When neither player can move any more pieces, the game ends. The winner at the end of the game is the player with the most pieces on the board."
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
