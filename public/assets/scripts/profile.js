document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('profile-username');
    const emailElement = document.getElementById('profile-email');

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (!username || !email) {
        window.location.href = 'index.html';
    } else {
        nameElement.textContent = username;
        emailElement.textContent = email;
    }
});

document.getElementById('change-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newPassword = document.getElementById('new-password').value;

    // Remplacer l'URL ci-dessous par l'URL de notre API backend pour changer le mot de passe
    fetch('https://votre-api-backend.com/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Password changed successfully.');
        } else {
            alert('Error changing password: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('delete-account-button').addEventListener('click', function() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        // Remplacez l'URL ci-dessous par l'URL de votre API backend pour supprimer le compte
        fetch('https://votre-api-backend.com/delete-account', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Account deleted successfully.');
                window.location.href = 'index.html';
            } else {
                alert('Error deleting account: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});