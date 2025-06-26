# nepcultapi API - Nepal Cultural & Natural Places

This is a simple RESTful API built with Node.js and Express that serves information about cultural and natural places in Nepal. The data is stored in a JSON file, making it lightweight and easy to maintain without a database.

---
# Endpoints
Endpoint	Method	Description	Params	Response
/places	GET	Returns all places	None	Array of all places
/places/province/:province	GET	Returns places filtered by province (case-insensitive)	province (string)	Array of places in the province
/places/location/:location	GET	Returns places filtered by location (case-insensitive)	location (string)	Array of places in the location

## Features

- **JSON Data Storage:** All place data is stored in a JSON file (`Places.json`).  
- **Express Backend:** RESTful routes created using Express.js.  
- **Dynamic Filtering:** Filter places by province or location.  
- **Rate Limiting:** Protects API from too many requests with `express-rate-limit`.  
- **Proxy Trust:** Configured with `app.set('trust proxy', 1)` for cloud hosting.  
- **CORS Enabled:** Allows cross-origin requests.  
- **Deployed on Render.com:** Free and easy deployment.

---

## Getting Started

### Prerequisites

- Node.js  
- npm

### Installation

```bash
git clone https://github.com/yourusername/places-api.git
cd places-api
npm install
npm start
