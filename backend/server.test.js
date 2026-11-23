//do "npm test backend/server.test.js" in terminal to run
require("dotenv").config({
    path: require("path").resolve(__dirname, ".env")
});

const request = require("supertest");
const server = require("./server");

test("Integration test with server: Household Name", async () => {
    const householdName = "testHouse";
    const username = "person1";

    const response = await request(server)
        .post("/api/household")
        .send({
            householdName,
            username
        });

    expect(response.body.Household.name).toBe(householdName);
});
