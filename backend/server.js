require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const express = require("express");
const app = express();

app.use(express.json());

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

const PORT = 3000;

app.post("/api/household", async (req, res) => {
    const { name } = req.body; || {};

    if (typeof name !== "string" || name.trim().length ===0) {
        return res.status(400).json({
            error: "Household name must be a non-empty string."
        });
    }

    const householdName = name.trim();

    const uniqueId = Math.random()
        .toString(36)
        .substring(2, 12)
        .toUpperCase();

    const { data, error } = await supabase
        .from("Household")
        .insert([
            {
                name: householdName,
                unique_id: uniqueId
            }
        ])
        .select();

    if (error) {
        return res.status(500).json({ error: "This server failed the connection between node express and Supabase"});
    }

    res.status(201).json(data[0]);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
