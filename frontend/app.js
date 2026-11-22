const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const message = document.getElementById("message");
const dashboardLink = document.getElementById("dashboardLink");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        tabButtons.forEach(function (tabButton) {
            tabButton.classList.remove("active");
        });

        tabContents.forEach(function (tabContent) {
            tabContent.classList.remove("active");
        });

        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
        message.textContent = "";
        message.className = "message";
    });
});

function showMessage(text, type) {
    message.textContent = text;
    message.className = "message " + type;
}

function showDashboardLink() {
    dashboardLink.style.display = "inline-block";
}

const form = document.getElementById("createForm");
let isSubmitting = false;

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (isSubmitting) {
        return;
    }
    isSubmitting = true;

    const btn = form.querySelector("button[type=submit]");
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Sending...";

    const householdName = document.getElementById("createHouseholdName").value;
    const username = document.getElementById("createUsername").value;

    showMessage("Creating household...", "");

    try {
        const response = await fetch("/api/household", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                householdName: householdName,
                username: username
            })
        });

        const data = await response.json();

        if (!response.ok) {
            showMessage(data.error || "Could not create household.", "error");
            return;
        }

        showMessage(
            "Household created! Name: " + data.Household.name +
            " | ID: " + data.Household.householdID +
            " | Code: " + data.Household.householdCode +
            " | User: " + data.User.name,
            "success"
        );

        btn.textContent = "Create Household";
        btn.disabled = false;
        isSubmitting = false;

        showDashboardLink();
    } catch (error) {
        showMessage("Could not connect to the server.", "error");
        btn.textContent = label;
        btn.disabled = false;
        isSubmitting = false;
    }
});

document.getElementById("joinForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const householdCode = document.getElementById("joinHouseholdCode").value;
    const username = document.getElementById("joinUsername").value;

    showMessage("Joining household...", "");

    try {
        const response = await fetch("/api/household/join", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                householdCode: householdCode,
                username: username
            })
        });

        const data = await response.json();

        if (!response.ok) {
            showMessage(data.error || "Could not join household.", "error");
            return;
        }

        showMessage(
            "Joined household! Name: " + data.Household.name +
            " | ID: " + data.Household.householdID +
            " | Code: " + data.Household.householdCode +
            " | User: " + data.User.name,
            "success"
        );
        showDashboardLink();
    } catch (error) {
        showMessage("Could not connect to the server.", "error");
    }
});
