// Function to fetch and display the first student's email
function fetchFirstStudentEmail() {
    fetch('/first-student-email')
        .then(response => response.text())
        .then(email => {
            document.getElementById('email').innerText = email;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to fetch and display all student emails
function fetchAllStudentEmails() {
    fetch('/all-student-emails')
        .then(response => response.json())
        .then(emails => {
            const alleEposterListe = document.getElementById('alleEposter');
            alleEposterListe.innerHTML = ''; // Clear previous emails
            emails.forEach(email => {
                const li = document.createElement('li');
                li.textContent = email;
                alleEposterListe.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Event listener for button
document.getElementById('btnVisEposter').addEventListener('click', fetchAllStudentEmails);
document.getElementById('email');
// Initial fetch for the first student's email
fetchFirstStudentEmail();