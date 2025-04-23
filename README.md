# 🌍 REST Countries React App

A fully responsive React application that displays country information using the [REST Countries API](https://restcountries.com/).  
This app includes user authentication, search functionality, region filtering, and per-user search history stored in MongoDB.

---

## 🔗 Live Demo

- **Frontend:** [View Website](https://countryexplo.netlify.app/)
- **Backend API:** [Render API](https://rest-countries-api-backend.onrender.com)

---

## 📸 Features

- 🔐 **User Sign In / Sign Up** with password validation
- 🌎 **REST Countries API** integration
- 🔍 **Search by country name**
- 🗂️ **Filter by region**
- 🔍 **Sort by population / Size Of Country / Name (ex- A - Z)**
- 📄 **View country details**
- 🧠 **User-specific search history**
- 🌈 **Blurred modals + alert feedback (SweetAlert2)**
- 💾 **MongoDB Atlas** backend

---

## 🛠️ Tech Stack

| Frontend  | Backend     | Database     |
|-----------|-------------|--------------|
| React     | Node.js     | MongoDB Atlas |
| Tailwind CSS | Express.js |              |
| Vite      | bcrypt, dotenv, mongoose |        |

---

## ⚙️ Project Setup (Frontend)

```bash
# Clone the repo
git clone https://github.com/vidura-12/countries-app-Frontend
cd your-frontend-repo

# Install dependencies
npm install

# Create environment file
echo "VITE_API_BASE=https://rest-countries-api-backend.onrender.com" > .env

# Run locally
npm run dev
```

> You must set `VITE_API_BASE` to your deployed backend URL.

---

## ⚙️ Backend Setup (Node + Express + MongoDB)

```bash
# Clone the backend repo
git clone https://github.com/vidura-12/rest-countries-api-backend
cd your-backend-repo

# Install dependencies
npm install

# Create environment file
touch .env
```

`.env` content:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/FinTrackDB?retryWrites=true&w=majority
```

```bash
# Start the server
node index.js
```

---

## 🚀 Deployment

### ✅ Frontend (Netlify)

- Push updates to `main` branch
- Netlify auto-deploys if GitHub is connected
- Or trigger manual deploy in Netlify dashboard

### ✅ Backend (Render)

- Add repo to [Render](https://render.com)
- Set up Web Service
- Add `.env` variables (`PORT`, `MONGODB_URI`)
- Render auto-deploys on push to `main`

---

## 🧪 Testing

| Action | Test |
|--------|------|
| Sign Up | Invalid + valid passwords |
| Sign In | Correct + incorrect credentials |
| Search | Valid country name |
| History | History is saved per user |
| Logout | Clears session and resets search |
| Mobile View | App remains responsive |

---

## 📁 Folder Structure (Frontend)

```
src/
├── components/
│   ├── AuthModal.jsx
│   ├── CountryCard.jsx
│   ├── CountryList.jsx
│   ├── LoginBox.jsx
│   └── RegionFilter.jsx
├── context/
│   └── UserContext.jsx
├── pages/
│   ├── Home.jsx
│   └── CountryDetails.jsx
├── services/
│   └── countriesAPI.js
├── App.jsx
└── main.jsx
```

---

## 🙌 Credits

- [REST Countries API](https://restcountries.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- Tailwind UI + Animate.css for clean UX

---

## 📄 License

This project is open source and free to use under the [MIT License](LICENSE).

```

---
