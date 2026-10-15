const request = require("supertest");
const app = require("./server");

test("Testing the API endpoints and the HTTP", async () => {
    const response = await request(app)
        .post("/api/household")
        .send({ name: "Automated Test For Household" });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Automated Test For Household");
    expect(response.body.unique_id).toBeDefined();
    expect(response.body.household_id).toBeDefined();
});