# 🌦️ Weather Now

A simple, responsive weather app built using **React** and **OpenWeatherMap API**.  
It allows users to search for current weather information by **city name** and view details such as temperature, humidity, and conditions.

---

## 🚀 Live Demo
🔗 **Deployed App:** [Weather Now on StackBlitz](https://stackblitz.com/~/github.com/ajnandhu2002-droid/React-Weather-App)

---

## 🧠 How I Approached the Project

1. **Understanding the Problem:**  
   The goal was to create an interactive weather app that fetches real-time data using a public API.

2. **Planning the UI:**  
   - Designed a clean, simple layout using HTML & CSS.  
   - Added a search box for city input and a card to display results.

3. **Coding the Logic:**  
   - Used React’s `useState` and `useEffect` hooks.  
   - Connected to **OpenWeatherMap API** using `fetch()`.

4. **Error Handling:**  
   - Display messages for invalid cities or API errors.  
   - Added loading and clear visuals for smooth UX.

5. **Testing & Deployment:**  
   - Tested multiple city searches (Chennai, Mumbai, New York).  
   - Deployed on **StackBlitz** for live preview.

---

## 🏗️ Project Structure
```
weather-checker/
├── public/
│   └── index.html                # Main HTML entry point
│
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── SearchBox.jsx         # Input + button for city search
│   │   ├── WeatherCard.jsx       # Displays weather details for a city
│   │   └── WeatherList.jsx       # Renders list of WeatherCard(s)
│   │
│   ├── App.js                    # Main app component, manages state and API calls
│   ├── App.css                   # Global styles (plain CSS)
│   └── index.js                  # React entry point, renders <App />
│
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration (used by StackBlitz)
├── README.md                     # Project overview and usage guide
└── .gitignore                    # Files ignored by Git

```

---

## 🧩 Features

✅ Search weather by city name  
✅ Displays temperature, humidity, and condition icon  
✅ Simple responsive UI using CSS  
✅ Error handling for invalid inputs  
✅ Fast API response using OpenWeatherMap  

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ajnandhu2002-droid/React-Weather-App.git
   cd Weather-Project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173
   ```

---

## 🔑 API Reference

This project uses the Open-Meteo API, which provides free and reliable weather data.

🌍 Geocoding API:
https://geocoding-api.open-meteo.com/v1/search?name={cityName}&count=1
→ Used to fetch the latitude and longitude of a city.

🌦️ Weather Forecast API:
https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true
→ Used to retrieve the current temperature, windspeed, and weather details.

✅ Note: The Open-Meteo APIs do not require an API key, making them ideal for learning and demo projects.

---

## 🧰 Technologies Used

- **React (Vite)**
- **JavaScript (ES6)**
- **HTML5 / CSS3**
- **Open-Meteo API**

---

## 💻 Code Repository

🔗 [GitHub Repository](https://github.com/ajnandhu2002-droid/React-Weather-App)

---

## 👨‍💻 Developer

**Nandha Janesh**  
💼 Developer | 🌐 Passionate about clean UI & smart code  
📧 [ajnandhu2002@gmail.com](mailto:ajnandhu2002@gmail.com)

---

⭐ If you liked this project, please consider giving it a star on GitHub!
