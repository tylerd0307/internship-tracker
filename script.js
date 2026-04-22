// Sample data - replace with user input later
let applications = [
  {
    company: "Google",
    role: "Software Engineer Intern",
    status: "Applied",
    lastContact: "2026-04-01"  // Example: April 1, 2026
  },
  {
    company: "Microsoft",
    role: "Data Analyst Intern",
    status: "Interview",
    lastContact: "2026-03-30"  // Example: March 30, 2026
  },
  {
    company: "Amazon",
    role: "Product Manager Intern",
    status: "Rejected",
    lastContact: "2026-04-05"  // Example: April 5, 2026
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
      row.classList.add("follow-up");  // Add class for highlighting
    }

    // Create table cells
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

// Initial render when page loads
renderTable();

// Existing add button listener (we'll update this next)
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  // For now, add a sample application and re-render
  applications.push({
    company: "Sample Company",
    role: "Sample Role",
    status: "Applied",
    lastContact: new Date().toISOString().split('T')[0]  // Today's date in YYYY-MM-DD
  });
  renderTable();
});