// Sample data - replace with user input later
let applications = [
  {
    company: "Google",
    role: "Software Engineer Intern",
    status: "Applied",
    lastContact: "2026-04-01"
  },
  {
    company: "Microsoft",
    role: "Data Analyst Intern",
    status: "Interview",
    lastContact: "2026-03-30"
  },
  {
    company: "Amazon",
    role: "Product Manager Intern",
    status: "Rejected",
    lastContact: "2026-04-05"
  }
];

// Function to render the table
function renderTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";  // Clear existing rows

  applications.forEach(app => {
    const row = document.createElement("tr");

    // Check if follow-up is needed (more than 10 days since last contact)
    const lastContactDate = new Date(app.lastContact);
    const today = new Date();
    const daysSinceContact = Math.floor((today - lastContactDate) / (1000 * 60 * 60 * 24));
    const needsFollowUp = daysSinceContact > 10;

    if (needsFollowUp) {
      row.classList.add("follow-up");
    }

    row.innerHTML = `
      <td>${app.company}</td>
      <td>${app.role}</td>
      <td>${app.status}</td>
      <td>${app.lastContact}</td>
      <td>${needsFollowUp ? "Yes" : "No"}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Show/hide the form
const formContainer = document.getElementById("formContainer");
const appForm = document.getElementById("appForm");

document.getElementById("addBtn").addEventListener("click", () => {
  formContainer.style.display = "block";
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  formContainer.style.display = "none";
  appForm.reset();
});

// Handle form submission
appForm.addEventListener("submit", (e) => {
  e.preventDefault();

  applications.push({
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    status: document.getElementById("status").value,
    lastContact: document.getElementById("lastContact").value
  });

  formContainer.style.display = "none";
  appForm.reset();
  renderTable();
});

// Initial render when page loads
renderTable();
