# 🌤️ WTWR (What To Wear?)

A responsive React application that recommends clothing based on the current weather. WTWR pulls live weather data for your location, classifies the day as hot, warm, or cold, and displays a curated list of clothing items suited to those conditions — along with a weather card showing the temperature and a condition-specific icon (clear, cloudy, fog, rain, snow, or storm) for both day and night.

## ✨ Features

- 🌡️ **Live weather data** — fetches current conditions from the OpenWeatherMap API based on geographic coordinates
- 🔥❄️ **Smart categorization** — classifies the day as hot, warm, or cold based on temperature, and filters the clothing list accordingly
- 🌓 **Day/night weather icons** — calculates whether it's currently daytime using sunrise/sunset data, and displays the matching icon for the current condition
- 👕 **Add new garments** — a modal form lets users add custom clothing items with a name, image URL, and weather type
- 🔍 **Item preview** — clicking any clothing card opens a larger preview showing the item's name and associated weather type
- 📱 **Responsive card grid** — a flexbox-based layout that adapts cleanly across screen sizes

## 🛠️ Built With

- ⚛️ React (functional components, Hooks)
- ⚡ Vite
- 🎨 CSS (BEM naming methodology)
- 📏 ESLint (flat config)
- ☁️ OpenWeatherMap API

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js installed on your machine
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### 📦 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/trustakaat/se_project_react.git
   ```
2. Navigate into the project folder and install dependencies
   ```bash
   cd se_project_react
   npm install
   ```
3. Add your OpenWeatherMap API key to `src/utils/constants.js`
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open the local URL shown in your terminal (typically `http://localhost:3000`)

## 🔗 Live Demo

_(Add your deployed link here once the project is live)_

## 📁 Project Structure

```
src/
├── assets/         # icons, images, fonts
├── blocks/         # CSS files (BEM-based)
├── components/     # React components (Header, Main, Footer, ModalWithForm, ItemModal, ItemCard, WeatherCard)
├── utils/          # constants and API helper functions
├── App.jsx
└── main.jsx
```

## 🔮 Future Improvements

- 💾 Persist added garments between sessions
- 🔐 Add user authentication
- 🔑 Move the API key to an environment variable for safer key handling

## 👤 Author

**James Clark**

- GitHub: [@trustakaat](https://github.com/trustakaat)
- LinkedIn: [jamesclarkdev](https://www.linkedin.com/in/jamesclarkdev)
