const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

const contents = [
    {
        image: "Images/tuto-1.png",
        text: "Each player is assigned a color and receives counters. Each is black on one side and white on the other. Black pawns start the game by placing the first pawn in a location that encloses an opponent."
    },
    {
        image: "Images/tuto-2.png",
        text: "To 'enclose' a disc means to surround one or more of your opponent's pieces with two of your own."
    },
    {
        image: "Images/tuto-3.png",
        text: "All black pawns between the two white pawns are then flipped over (captured), showing their white side. A piece can capture any number of the opponent's pieces (diagonally, horizontally or vertically)."
    },
    {
        image: "Images/tuto-4.png",
        text: "If a player cannot enclose at least one of his opponent's pawns, he is forced to skip his turn. When neither player can move any more pieces, the game ends. The winner at the end of the game is the player with the most pieces on the board."
    }
];


const contentImage = document.querySelector('.window img');
const contentText = document.querySelector('.text-content');

let currentIndex = 0;

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

function updateContent(index) {
    contentImage.src = contents[index].image;
    contentText.textContent = contents[index].text;
}

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent(currentIndex);
    }
});

rightButton.addEventListener('click', () => {
    if (currentIndex < contents.length - 1) {
        currentIndex++;
        updateContent(currentIndex);
    }
});

updateContent(currentIndex);

document.querySelector('.login form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.auth) {
            localStorage.setItem('token', data.token);
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    });
});

document.querySelector('.register form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.auth) {
            localStorage.setItem('token', data.token);
            alert('Registration successful');
            // Redirection vers la page de login
            window.location.href = 'index.html'; // Remplacez par le chemin de votre page de login
        } else {
            alert('Registration failed');
        }
    });
});
