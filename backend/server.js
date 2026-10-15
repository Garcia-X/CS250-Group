//Used AI to provide a suggestion on if I should console log all of my errors
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

const PORT = 3000;
//Serve static frontend files
app.use(express.static(path.join(__dirname)));

app.post("/api/household", async (req, res) => {
    const { householdName, username } = req.body || {};

        if (typeof householdName !== "string" || householdName.trim().length ===0) {
        return res.status(400).json({
            error: "Household name must be a non-empty string."
        });
    }
        if (typeof username !== "string" || username.trim().length ===0) {
            return res.status(400).json({
                error: "Username must be a non-empty string."
            });
        }
    const householdCode = Math.random()
        .toString(36)
        .substring(2, 9)
        .toUpperCase();

    const { data: householdData, error: householdError } = await supabase
        .from("Household")
        .insert([
            {
                name: householdName.trim(),
                householdCode: householdCode.trim()
            }
        ])
        .select();

    if (householdError) {
        console.log(householdError);
        return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
    }

    //Used ai to understand and implement the destructuring of the objects 
    const {  data: userData, error: userError } = await supabase
        .from("User")
        .insert([
            {
                name: username.trim(),
            }
        ])
        .select();

    if (userError) {
        console.log(userError);
        return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
    }

    const {  data: memberData, error: memberError } = await supabase
        .from("members")
        .insert([
            {
                user_id: userData[0].user_id,
                householdID: householdData[0].householdID
            }
        ])
        .select();

    if (memberError) {
        console.log(memberError);
        return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
    }  
    res.status(201).json({Household: householdData[0], User: userData[0], members: memberData[0]});
    console.log(householdData[0], userData[0], memberData[0]);

    
});

app.post("/api/household/join", async (req, res) => {
    const { householdCode,  username } = req.body || {};

        if (typeof householdCode !== "string" || householdCode.trim().length ===0) {
             return res.status(400).json({error: "Household code must be a non-empty string."});
            }
        if (typeof username !== "string" || username.trim().length ===0) {
            return res.status(400).json({
                error: "Username must be a non-empty string."
            });
        }


    const { data: householdCodeData, error: householdCodeError } = await supabase
        .from("Household")
        .select()
        .eq('householdCode', householdCode.trim())
        
        if (householdCodeError) {
            console.log(householdCodeError);
            return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
        }
        if(householdCodeData.length == 0){
            return res.status(404).json({ error: "Household code doesn't exist"});

        }

    const {  data: userData, error: userError } = await supabase
        .from("User")
        .insert([
            {
                name: username.trim(),
            }
        ])
        .select();

    if (userError) {
        console.log(userError);
        return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
    }

        
        
    const {  data: memberData, error: memberError } = await supabase
        .from("members")
        .insert([
            {
                user_id: userData[0].user_id,
                householdID: householdCodeData[0].householdID
            }
        ])
        .select();

    if (memberError) {
        console.log(memberError);
        return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
    }
    res.status(201).json({Household: householdCodeData[0], User: userData[0], members: memberData[0]});
    console.log(householdCodeData[0], userData[0], memberData[0]);

    
});


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;