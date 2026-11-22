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
//check household memebership
async function checkMembership(userID, householdID) {
    const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("user_id", userID)
        .eq("householdID", householdID)
        .maybeSingle();
    if (error) {
        console.log(error);
        return false;
    }
    return data !== null;
}
//Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

//creates household
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
        //genertate household code
    const householdCode = Math.random()
        .toString(36)
        .substring(2, 9)
        .toUpperCase();
        //insert household
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
    //insert user
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
    //insert member
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
//join existing household
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

        //look up household code
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
        //insert user
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

        
        //insert member
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

app.get("/api/household/:householdID/:userID", async (req, res) => {
    const { householdID, userID } = req.params;

    //check if user belongs to the household
    const isMember = await checkMembership(userID, householdID);

    if(!isMember) {
        return res.status(403).json({ error: "Access denied. User does not belong to this household." });
    }

    const { data, error } = await supabase
        .from("Household")
        .select("*")
        .eq("householdID", householdID)
        .maybeSingle();

    if (error) {
        console.log(error);
        return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
    }
    
    if (!data) {
        return res.status(404).json({ error: "Household not found." });
    }
    return res.status(200).json(data);
});



if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
