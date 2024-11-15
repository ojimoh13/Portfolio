document.addEventListener('DOMContentLoaded', function() {
    drawTable();
});

function drawTable() {
    let rows = document.getElementById('rows').value || 15;
    let columns = document.getElementById('columns').value || 15;

    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; 
    let table = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= columns; j++) {
            let td = document.createElement('td');
            td.textContent = `(${i}, ${j})`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
}
