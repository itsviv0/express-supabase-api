# CURL commands for the PROD API

## 📥 1. Create a New Note (POST)

```bash
curl -X POST https://express-supabase-api.vivs.live/api/notes \
 -H "Content-Type: application/json" \
 -d '{"title": "My First Note", "content": "This is the body of the note."}'
```

## 📤 2. Get All Notes (GET)

```bash
curl https://express-supabase-api.vivs.live/api/notes
```

## ✏️ 3. Update a Note (PUT)

```bash
curl -X PUT https://express-supabase-api.vivs.live/api/notes/<NOTE_ID> \
 -H "Content-Type: application/json" \
 -d '{"title": "Updated Note Title", "content": "Updated content of the note."}'
```

> 🔁 Replace <NOTE_ID> with the actual UUID of a note returned from the GET request.

## ❌ 4. Delete a Note (DELETE)

```bash
curl -X DELETE https://express-supabase-api.vivs.live/api/notes/<NOTE_ID>
```
