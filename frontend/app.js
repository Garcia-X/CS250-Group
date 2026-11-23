const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const message = document.getElementById("message");
const dashboardLink = document.getElementById("dashboardLink");

tabButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        tabButtons.forEach(function(tabButton) {
            tabButton.classList.remove("active");
        });

        tabContents.forEach(function(tabContent) {
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

document.getElementById("createForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const submitButton = this.querySelector("button[type='submit']");

    if (submitButton.disabled) {
        return;
    }
    const householdName = document.getElementById("createHouseholdName").value;
    const username = document.getElementById("createUsername").value;

    submitButton.disabled = true;
    submitButton.textContent = "Creating...";

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

        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error("Invalid JSON response from server.");
        }

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
        showDashboardLink();
    } catch (error) {
        showMessage(error.message || "Could not connect to the server.", "error");
    }
    finally {
        submitButton.disabled = false;
        submitButton.textContent = "Create Household";
    }
});

document.getElementById("delete").addEventListener("click", async function (event) {
    event.preventDefault();

    try {
        const response = await fetch("/api/household/households", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                householdCode: householdCode,
                username: username
            })
        });

        const data = await response.json();

        if (!response.ok) {
            showMessage(data.error || "Could not delete household.", "error");
            return;
        }
        showMessage("Household deleted successfully.", "success");
    } catch (error) {
        showMessage("Could not connect to the server.", "error");
    }
});

document.getElementById("joinForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const submitButton = this.querySelector("button[type='submit']");

    if (submitButton.disabled) {
        return;
    }
    const householdCode = document.getElementById("joinHouseholdCode").value;
    const username = document.getElementById("joinUsername").value;

    submitButton.disabled = true;
    submitButton.textContent = "Joining...";

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
        let data;

        try {
            data = await response.json();
        } catch (error) {
            throw new Error("Invalid JSON response from server.");
        }

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
        showMessage(error.message || "Could not connect to the server.", "error");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Join Household";
    }
});

module.exports = { showMessage, showDashboardLink }
