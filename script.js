// Get elements from the DOM
const vaccinationForm = document.getElementById('vaccinationForm');
const vaccinationList = document.getElementById('vaccinationList');
const message = document.getElementById('message');

// Initialize an array to hold vaccination records
let vaccinations = [];

// Function to render the vaccination list
function renderVaccinations() {
    vaccinationList.innerHTML = ''; // Clear the current list
    vaccinations.forEach((record, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `${record.childName} - ${record.vaccinationName} (Date: ${new Date(record.date).toLocaleDateString()})`;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteVaccination(index);

        listItem.appendChild(deleteButton);
        vaccinationList.appendChild(listItem);
    });
}

// Function to delete a vaccination record
function deleteVaccination(index) {
    vaccinations.splice(index, 1);
    renderVaccinations(); // Re-render the list
}

// Vaccination Form Submit Event
vaccinationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const childName = document.getElementById('childName').value;
    const vaccinationName = document.getElementById('vaccinationName').value;
    const vaccinationDate = document.getElementById('vaccinationDate').value;

    // Add new vaccination record to the array
    vaccinations.push({ childName, vaccinationName, date: vaccinationDate });
    
    // Display success message
    message.style.display = 'block';
    message.className = 'alert alert-success';
    message.textContent = 'Vaccination record added successfully!';

    // Reset the form and render vaccination records
    vaccinationForm.reset();
    renderVaccinations();
});
