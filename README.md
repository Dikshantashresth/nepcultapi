# 🌄 Places API – Nepal's Cultural & Natural Gems

A simple and clean RESTful API built with **Node.js** and **Express**, serving detailed information about **cultural and natural places in Nepal**. Perfect for small projects, prototypes, and educational purposes.  
Data is stored in a **local JSON file**.

---

## 🚀 Features

- 📁 JSON file as data storage  
- ⚡ RESTful endpoints with filtering by province and location  
- 🛡️ Rate limiting (100 requests/min/IP)  
- 🌐 CORS enabled  
- ☁️ Configured for cloud deployment (e.g. Render.com)  
- 🔐 Proxy trust set up using `app.set('trust proxy', 1)`

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js  
- npm

### 📦 Installation & Setup

```bash
git clone https://github.com/yourusername/places-api.git
cd places-api
npm install
npm start
The server will run at:
http://localhost:3000

📌 API Endpoints
1. Get All Places
Endpoint: GET /places

Description: Returns a list of all places in the dataset.

Example:

bash
Copy
Edit
GET http://localhost:3000/places
2. Get Places by Province
Endpoint: GET /places/province/:province

Description: Returns places located in the specified province.

Parameter: province – Province name (case-insensitive)

Example:

bash
Copy
Edit
GET http://localhost:3000/places/province/bagmati
3. Get Places by Location
Endpoint: GET /places/location/:location

Description: Returns places located in the specified location.

Parameter: location – Location name (case-insensitive)

Example:

bash
Copy
Edit
GET http://localhost:3000/places/location/kathmandu
🚧 Rate Limiting
Limit: 100 requests per IP per minute

Response if exceeded:

json
Copy
Edit
{
  "message": "Too many requests. Try again after a minute."
}
📎 Notes
Data is stored in a static JSON file — ideal for MVPs and beginner projects.

app.set('trust proxy', 1) is used to handle client IPs properly when deployed behind services like Render.com.

📤 Deployment
The API is deployed on Render.com.
