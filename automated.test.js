const request = require("supertest");
const app = require("./server");

test("Testing the API endpoints and the HTTP", async () => {
    const response = await request(app)
        .post("/api/household")
        
        .send({ householdName: "Test Household", username: "Test" });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      Household:  {
         householdCode: expect.any(String),
         householdID: expect.any(String),
         name: "Test Household",
       },
       User:  {
         name: "Test",
         user_id: expect.any(String)
       }, 
       members:  {
        user_id: expect.any(String),
        householdID: expect.any(String)
      }


    });



});