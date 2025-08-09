# 📚 EducaseShree API

> ⚠️ **Important Notice**
>
> - **Base URL:** https://educaseassignment-8qcs.onrender.com
> - **Free-tier DB & Hosting:** This project uses free-tier database and hosting services.
> - **First Request Delay:** If the first request fails, please wait **a couple of minutes** and try again — the server will auto-restart.

---

A simple Node.js + Express backend for managing and retrieving school data.  
Supports adding schools with coordinates and fetching a sorted list of schools by proximity to a given location.

---

## 🚀 Base URL

https://educaseassignment-8qcs.onrender.com

---

## 📌 Endpoints

### 1️⃣ Add School

**Method:** `POST`  
**Endpoint:** `/addschool`  
**Description:** Adds a new school entry to the database with its name, address, and coordinates.

#### Request Body (JSON)

```json
{
  "name": "The Oxford School, Trivandrum",
  "address": "FX63+QX7, near National College, National Nagar, Konchiravila, Kallattumukku, Thiruvananthapuram, Kerala 695009",
  "latitude": 8.461965328431921,
  "longitude": 76.95322504895299
}
Success Response
201 Created


{
  "id": "uuid",
  "name": "The Oxford School, Trivandrum",
  "address": "FX63+QX7, near National College, National Nagar, Konchiravila, Kallattumukku, Thiruvananthapuram, Kerala 695009",
  "latitude": 8.461965328431921,
  "longitude": 76.95322504895299,
  "createdAt": "2025-08-09T19:35:02.000Z",
  "updatedAt": "2025-08-09T19:35:02.000Z"
}
2️⃣ List Schools (Sorted by Proximity)
Method: GET
Endpoint: /listschools
Description: Fetches all schools from the database, sorted by straight-line distance from the given coordinates (Haversine formula).

Request Body (JSON)

{
  "latitude": 25.606894188274655,
  "longitude": 85.04212989054288
}
Success Response
200 OK


[
  {
    "id": "uuid",
    "name": "School Name",
    "address": "School Address",
    "latitude": 0,
    "longitude": 0,
    "distance": 0
  }
]
🛠️ Tech Stack
Node.js – Backend runtime

Express.js – Web framework

Sequelize – ORM for database interaction

MySQL – Database

Geolib – For geographical distance calculation (Haversine formula)

CORS – Cross-Origin Resource Sharing setup

📦 Installation & Setup
bash
Copy
Edit
# Clone the repository
git clone <repo_url>
cd repo-dir

# Install dependencies
npm install

# Setup Environment Variables

# Start the server
npm start

📜 Notes
Distances are calculated as straight-line distances (“as the crow flies”) using latitude/longitude.

API is publicly accessible and does not require authentication.
```
