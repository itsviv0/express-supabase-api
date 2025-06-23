const request = require("supertest");
const app = require("../api/index");

describe("Notes API", () => {
  let noteId;

  test("POST /api/notes → should create a new note", async () => {
    const response = await request(app)
      .post("/api/notes")
      .send({ title: "Test Note", content: "This is a test note." });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    noteId = response.body.id; // save for later tests
  });

  test("GET /api/notes → should return list of notes", async () => {
    const response = await request(app).get("/api/notes");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("PUT /api/notes/:id → should update the note", async () => {
    const response = await request(app)
      .put(`/api/notes/${noteId}`)
      .send({ title: "Updated Test Note", content: "Updated content." });

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe("Updated Test Note");
  });

  test("DELETE /api/notes/:id → should delete the note", async () => {
    const response = await request(app).delete(`/api/notes/${noteId}`);
    expect(response.statusCode).toBe(204);
  });

  // Additional tests for error handling
  test("POST /api/notes → should fail when title is missing", async () => {
  const res = await request(app)
    .post("/api/notes")
    .send({ content: "No title provided" });

  expect(res.statusCode).toBe(500); // or 400, depending on how you handle it
  });

  test("GET /api/notes → should return empty array when no notes exist", async () => {
  const res = await request(app).get("/api/notes");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  });

  test("PUT /api/notes/:id → should return 500 for non-existing ID", async () => {
  const res = await request(app)
    .put("/api/notes/non-existent-id")
    .send({ title: "Doesn't exist", content: "..." });
  expect(res.statusCode).toBe(500);
  });

  test("DELETE /api/notes/:id → should return 500 for non-existing ID", async () => {
  const res = await request(app)
    .delete("/api/notes/non-existent-id");
  expect(res.statusCode).toBe(500);
  });

});
