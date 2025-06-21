const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// GET all notes
app.get("/api/notes", async (req, res) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error });
  res.status(200).json(data);
});

// POST a note
app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;
  const { data, error } = await supabase
    .from("notes")
    .insert([{ title, content }]);

  if (error) return res.status(500).json({ error });
  res.status(201).json(data[0]);
});

// PUT update a note
app.put("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { data, error } = await supabase
    .from("notes")
    .update({ title, content })
    .eq("id", id);

  if (error) return res.status(500).json({ error });
  res.status(200).json(data[0]);
});

// DELETE a note
app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) return res.status(500).json({ error });
  res.status(204).send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
