# API INTEGRATION

**COMPANY NAME**: CODETECH IT SOLUTIONS

**NAME**: MOHAMMED MUDABIR RAZA

**INTERN ID**: CT08UZG

**DOMAIN**: FULL STACK

**DURATION**: 4 WEEKS

**MENTOR**: NEELA SANTOSH

## OVERVIEW
The Weather App is a simple and interactive web application built with React that provides real-time weather updates using the OpenWeather API. Users can enter a city name to get detailed weather information, including temperature, humidity, and wind speed. The app features a clean and user-friendly interface, ensuring seamless interaction.

## TOOLS

- **Code Editor**: Visual Studio Code
- **Frontend Tools**: Vite with React and JavaScript
- **API**: [OpenWeather API](https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric)
- **API Testing Tools**: Thunder Client (VS Code), Postman (optional)
- **Styling**: CSS, Tailwind CSS (optional for responsiveness)
- **State Management**: React Hooks (useState, useEffect)

The additional `units=metric` parameter in the API URL ensures temperature conversion from Fahrenheit to Celsius. To use this API, log in to the OpenWeather app to generate your **API key**. The **city name** is provided by the user as input.

## DESCRIPTION

The application is a simple **Weather App Web Page** that displays real-time weather information for a selected city. The user selects a location using a dropdown menu, and the app fetches and displays relevant weather data. 

The key features include:

- **Weather Cards**: Display temperature, humidity, and wind speed in a structured format.
- **Dropdown Selection**: Allows users to select a city from a predefined list.
- **API Integration**: Retrieves weather data dynamically based on user input.
- **Search Functionality**: Users can type and search for any city worldwide.
- **Error Handling**: Displays appropriate messages if the city is not found or API fails.
- **Loading Indicator**: Shows a loading spinner while fetching data from the API.

Using the Thunder Client, we integrate the following basic features:

1. **Temperature**
2. **Humidity**
3. **Wind Speed**
4. **Weather Description** (e.g., Cloudy, Rainy, Sunny)
5. **Icon Representation** (Displays weather icons based on conditions)

To obtain latitude and longitude for specific locations, you can use the website [LatLong.net](https://www.latlong.net/).

## Weather Cards Preview:

![Image](https://github.com/user-attachments/assets/41e71053-082b-49e2-a29b-85e0e0dd6a6f)

## Behance Output Designs:

![Image](https://github.com/user-attachments/assets/c7cc79bd-a020-4782-8418-c23ae5a1cf71)

![Image](https://github.com/user-attachments/assets/10742497-00f5-4a61-aed5-fa6f96fde1a8)

The above images represent the design ideas for the Weather App interface.

## Basic Features of the Application:

1. **Real-time Weather Data**: Fetches live weather data using the OpenWeather API.
2. **Search by City**: Allows users to input a city name to get current weather conditions.
3. **API Integration**: Uses the OpenWeather API for reliable weather updates.
4. **User-Friendly UI**: Clean and intuitive design for better user experience.
5. **Responsive Design**: Works on desktop, tablet, and mobile devices.
6. **Error Handling**: Displays proper alerts if the API call fails or an invalid city is entered.
7. **Weather Icons**: Displays graphical representations of weather conditions.

## Future Enhancements:

- **5-day Weather Forecast**: Extend the app to show future weather predictions.
- **Dark Mode**: Implement a toggle for dark and light themes.
- **Location-based Weather**: Use geolocation to fetch weather updates based on the user's current location.
- **Unit Conversion**: Allow users to switch between Celsius and Fahrenheit.
- **Historical Weather Data**: Provide past weather data for selected locations.

This Weather App is a beginner-friendly project showcasing API integration, dynamic UI updates in React, and interactive user experience. 🚀

