document.addEventListener('DOMContentLoaded', () => {
    fetch('/scores')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#scores-table tbody');
            tableBody.innerHTML = ''; // Efface les lignes existantes

            data.forEach((user, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.username}</td>
                    <td>${user.score}</td>
                    <td>${user.nbrGameWon}</td>
                    <td>${user.nbrGameLost}</td>
                    <td>${user.nbrGamePlayed}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching scores:', error));
});