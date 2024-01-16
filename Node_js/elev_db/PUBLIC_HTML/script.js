function showNames() {
    fetch('/student-names')
        .then(response => response.json())
        .then(names => {
            const container = document.getElementById('txtUt');
            container.innerHTML = "";
            names.forEach(name => {
                const nameElement = document.createElement('p');
                nameElement.textContent = name;
                container.appendChild(nameElement);
            });
        })
        .catch(error => console.error('Error:', error));
}

// function showTable() {
//     fetch('/student-all')
//         .then(response => response.json())
//         .then(students => {
//             const container = document.getElementById('txtUt');
//             container.innerHTML = "";
//             const tab = document.createElement('table');

//             // Create header row
//             const headerRow = document.createElement('tr');
//             Object.keys(students[0]).forEach(columnName => {
//                 const headerCell = document.createElement('th');
//                 headerCell.textContent = columnName;
//                 headerRow.appendChild(headerCell);
//             });

//             // Append header row to the table
//             tab.appendChild(headerRow);

//             //Create rows
//             students.forEach(student => {
//                 const row = document.createElement('tr');
//                 Object.values(student).forEach(value => {
//                     const cell = document.createElement('td');
//                     cell.textContent = value;
//                     row.appendChild(cell);
//                 });
//                 table.appendChild(row);
//             });

//             // Add table to container
//             container.appendChild(tab);
//         })
//         .catch(error => console.error('Error:', error));
// }

function showTable() {
    fetch('/student-all')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(students => {
            console.log(students);
        })
        .catch(error => console.error('Error:', error));
}

