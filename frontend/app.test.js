/**
 * @jest-environment jsdom
 */

//const app = require("./app.js");
let showMessage;
let showDashboardLink;

beforeEach(() => {
    document.body.innerHTML = `
        <div id="message" class="message"></div>
        <a id="dashboardLink" style="display: none;"></a>
        <p id="createForm">p</p>
        <p id="joinForm">q</p>`;
    jest.resetModules();
    ({ showMessage, showDashboardLink } = require("./app.js"));
});

test("showMessage updates the message element", () => {
    showMessage("Test message", "success");
    
    const message = document.getElementById("message");
    expect(message.textContent).toBe("Test message");
    expect(message.className).toBe("message success");
});

test("showDashboardLink makes the dashboard link visible", () => {
    showDashboardLink();
    const dashboardLink = document.getElementById("dashboardLink");
    expect(dashboardLink.style.display).toBe("inline-block");
});