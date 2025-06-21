# 🧪 API Endpoints

| Method | Endpoint | Description |
| -------- | -------- | -------- | 
| GET |	/api/notes | Get all notes |
| POST | /api/notes | Create a new note |
| PUT | /api/notes/:id | Update a note by ID |
| DELETE | /api/notes/:id | Delete a note by ID |


## 📄 1. Get All Notes

- Endpoint: GET /api/notes
- Description: Fetches all notes from the database.
- Request Body: None
- Response:
    ```json
    [
    {
        "id": "7c3a9f53-1bb4-4d32-b7fa-49ccca3d6015",
        "title": "First Note",
        "content": "This is the content of the note.",
        "created_at": "2025-06-21T06:31:15.000Z"
    },
    ...
    ]
    ```

## 📝 2. Create a New Note

- Endpoint: POST /api/notes
- Description: Creates a new note and stores it in the database.
- Request Body:
    ```json
    {
    "title": "New Note",
    "content": "This is a new note."
    }
    ```
- Response:
    ```json
    {
    "id": "0b82ae19-cf49-470e-892e-2eeb176e79de",
    "title": "New Note",
    "content": "This is a new note.",
    "created_at": "2025-06-21T07:00:00.000Z"
    }
    ```

## ✏️ 3. Update a Note by ID

- Endpoint: PUT /api/notes/:id
- Description: Updates the title and/or content of an existing note.
- URL Parameter: :id = UUID of the note to update
- Request Body:
    ```json
    {
    "title": "Updated Title",
    "content": "Updated content for the note."
    }
    ```
- Response:
    ```json
    {
    "id": "0b82ae19-cf49-470e-892e-2eeb176e79de",
    "title": "Updated Title",
    "content": "Updated content for the note.",
    "created_at": "2025-06-21T07:00:00.000Z"
    }
    ```

## ❌ 4. Delete a Note by ID

- Endpoint: DELETE /api/notes/:id
- Description: Deletes the note with the given ID.
- URL Parameter: :id = UUID of the note to delete
- Request Body: None
- Response: Status 204 No Content (empty)