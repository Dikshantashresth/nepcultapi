# Places API - Nepal Cultural & Natural Places

A simple RESTful API built with Node.js and Express that provides information about cultural and natural places in Nepal. Data is stored in a JSON file.

---

## Features

- JSON file data storage  
- Express backend with dynamic filtering  
- Rate limiting to protect the API  
- Proper proxy trust setup for cloud deployment  
- CORS enabled  
- Deployed on Render.com

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
The API will run at:
http://localhost:3000

API Endpoints
1. Get all places
Endpoint: GET /places

Description: Returns a list of all places in the dataset.

Example Request:
GET http://localhost:3000/places

2. Get places by province
Endpoint: GET /places/province/:province

Parameters:

province — Province name (case-insensitive)

Description: Returns places in the specified province.

Example Request:
GET http://localhost:3000/places/province/bagmati

3. Get places by location
Endpoint: GET /places/location/:location

Parameters:

location — Location name (case-insensitive)

Description: Returns places in the specified location.

Example Request:
GET http://localhost:3000/places/location/kathmandu

Rate Limiting
Maximum 100 requests per IP per minute.

If exceeded, returns:

json
Copy
Edit
{
  "message": "Too many requests. Try again after a minute."
}
Notes
Data is stored in a JSON file for simplicity — great for small projects or prototypes.

app.set('trust proxy', 1) is configured to handle client IPs correctly behind cloud proxies like Render.com.
