document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    if (registerLink) {
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
    }

    if (btnPopup) {
        btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
        });
    }

    if (iconClose) {
        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });
    }

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

    const leftButton = document.querySelector('#leftButton');
    const rightButton = document.querySelector('#rightButton');

    function updateContent(index) {
        if (contentImage && contentText) {
            contentImage.src = contents[index].image;
            contentText.textContent = contents[index].text;
        }
    }

    if (leftButton) {
        leftButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateContent(currentIndex);
            }
        });
    }

    if (rightButton) {
        rightButton.addEventListener('click', () => {
            if (currentIndex < contents.length - 1) {
                currentIndex++;
                updateContent(currentIndex);
            }
        });
    }

    updateContent(currentIndex);

    const loginError = document.querySelector('#login-error');

    const loginForm = document.querySelector('.login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
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
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json().then(data => {
                    console.log(data);
                    if (data.auth) {
                        localStorage.setItem('token', data.token);
                        window.location.href = '/rules.html';
                    } else {
                        loginError.textContent = 'Invalid email or password';
                    }
                });
            });
        });
    }
    const registerForm = document.querySelector('#register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = event.target.querySelector('input[type="text"]').value;
            const email = event.target.querySelector('input[type="email"]').value;
            const password = event.target.querySelector('input[type="password"]').value;

            console.log(username, email, password);

            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                response.json();
            });
        });
    }
});
