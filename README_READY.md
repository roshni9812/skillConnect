# jobportal-yt (prepared)

I prepared a ready-to-run copy of the project. Follow these steps to run locally.

## Backend (API)
1. Open terminal and go to `backend` folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Copy `.env.example` to `.env` and fill values (MongoDB, JWT_SECRET, Cloudinary if needed). Example:
   ```
   cp .env.example .env
   ```
   Edit `.env` and set `MONGO_URI` (for local MongoDB use `mongodb://127.0.0.1:27017/SkillConnect`) and `PORT` (default 8000).

4. Start backend in dev mode:
   ```
   npm run dev
   ```
   or for production:
   ```
   npm start
   ```

## Frontend (Vite)
1. Open new terminal and go to `frontend` folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Copy `.env.example` to `.env` if you want to set API URL:
   ```
   cp .env.example .env
   ```
   By default `VITE_API_URL` is `http://localhost:8000` — make sure it matches backend port.

4. Start frontend:
   ```
   npm run dev
   ```
   The dev server typically runs at `http://localhost:5173`.

## Notes / Common fixes
- Make sure backend PORT and `VITE_API_URL` port match.
- Multer file upload expects form field name `file`. In Postman use **form-data** and key `file` (type File).
- If you get CORS errors, confirm backend `cors` origin is `http://localhost:5173` or adjust accordingly in `backend/index.js`.
- If ports conflict with other apps, change backend PORT or `vite` port.

