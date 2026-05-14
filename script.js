let applications = JSON.parse(localStorage.getItem('applications')) || [
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

let editIndex = -1;
let currentFilter = "all";

function save() {
  localStorage.setItem('applications', JSON.stringify(applications));
}

function renderTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  const filtered = currentFilter === "followup"
    ? applications.filter(app => {
        const days = Math.floor((new Date() - new Date(app.lastContact)) / (1000 * 60 * 60 * 24));
        return days > 10;
      })
    : applications;

  filtered.forEach(app => {
    const index = applications.indexOf(app);
    const row = document.createElement("tr");

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
      <td class="status-${app.status.toLowerCase()}">${app.status}</td>
      <td>${app.lastContact}</td>
      <td>${needsFollowUp ? "⚠️" : ""}</td>
      <td>${app.notes || ""}</td>
      <td>
        <button onclick="startEdit(${index})">edit</button>
        <button onclick="deleteApp(${index})">delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function startEdit(index) {
  const app = applications[index];
  editIndex = index;
  document.getElementById("company").value = app.company;
  document.getElementById("role").value = app.role;
  document.getElementById("status").value = app.status;
  document.getElementById("lastContact").value = app.lastContact;
  document.getElementById("notes").value = app.notes || "";
  document.getElementById("formTitle").textContent = "edit application";
  document.getElementById("submitBtn").textContent = "save changes";
  formContainer.style.display = "block";
}

function deleteApp(index) {
  if (!confirm("Are you sure you want to delete this application?")) return;
  applications.splice(index, 1);
  save();
  renderTable();
}

function resetForm() {
  editIndex = -1;
  appForm.reset();
  document.getElementById("formTitle").textContent = "add application";
  document.getElementById("submitBtn").textContent = "add";
  formContainer.style.display = "none";
}

const formContainer = document.getElementById("formContainer");
const appForm = document.getElementById("appForm");

document.getElementById("addBtn").addEventListener("click", () => {
  resetForm();
  formContainer.style.display = "block";
});

document.getElementById("cancelBtn").addEventListener("click", resetForm);

appForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const entry = {
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    status: document.getElementById("status").value,
    lastContact: document.getElementById("lastContact").value,
    notes: document.getElementById("notes").value
  };

  if (editIndex === -1) {
    applications.push(entry);
  } else {
    applications[editIndex] = entry;
  }

  save();
  resetForm();
  renderTable();
});

document.getElementById("filterAll").addEventListener("click", () => {
  currentFilter = "all";
  document.getElementById("filterAll").classList.add("active");
  document.getElementById("filterFollowUp").classList.remove("active");
  renderTable();
});

document.getElementById("filterFollowUp").addEventListener("click", () => {
  currentFilter = "followup";
  document.getElementById("filterFollowUp").classList.add("active");
  document.getElementById("filterAll").classList.remove("active");
  renderTable();
});

renderTable();
