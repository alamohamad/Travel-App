// Function to retrieve coordinates and country name from the GeoNames API
const getLocationData = async (location) => {
    const username = process.env.GEONAMES_USERNAME; 
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${username}`);
    
    if (!response.ok) {
        throw new Error(`GeoNames API error : ${response.status}`);
    }
    
    const data = await response.json();

    // Validate the API response and extract the relevant data
    if (data.geonames && data.geonames.length > 0) {
        const { lat, lng, countryName } = data.geonames[0];
        return { latitude: lat, longitude: lng, country: countryName };
    } else {
        throw new Error('Location not found');
    }
};

// Function to retrieve weather information from the Weatherbit API
const getWeatherData = async (latitude, longitude) => {
    const apiKey = process.env.WEATHERBIT_API_KEY; 
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${apiKey}`);
    
    // Check if the API request was successful
    if (!response.ok) {
        throw new Error(`Weatherbit API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
};

// Function to retrieve an image for the location from the Pixabay API
const getLocationImage = async (location) => {
    const apiKey = process.env.PIXABAY_API_KEY;
    const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(location)}&image_type=photo`);
        if (!response.ok) {
        throw new Error(`Pixabay API error: ${response.status}`);
    }
    
    const data = await response.json();

    if (data.hits.length > 0) {
        return data.hits[0].webformatURL;
    } else {
        return 'default_image_url'; 
    }
};

// Function to calculate the countdown to the trip start date
const calculateDaysUntilTrip = (date) => {
    const tripDate = new Date(date);
    const today = new Date();
    const timeDiff = tripDate - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
};

// Function to calculate the duration of the trip
const calculateTripLength = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24)); 
};

// Function to render the trip information on the page
const renderTripDetails = (locationData, weatherData, imageUrl, startDate, endDate, tripLength) => {
    const resultSection = document.getElementById('result-section');
    const tripInfoDiv = document.getElementById('trip-info'); 
    const daysUntilTrip = calculateDaysUntilTrip(startDate); 

    // Populate the trip info div with the retrieved data
    tripInfoDiv.innerHTML = `
      <img src="${imageUrl}" alt="${locationData.country}" class="trip-img">
      <p><strong>Trip Start Date:</strong> ${startDate}</p>
      <p><strong>End Date:</strong> ${endDate}</p>
      <p><strong>Days Until Trip:</strong> ${daysUntilTrip}</p>
      <p><strong>Trip Duration:</strong> ${tripLength} days</p>
      <p><strong>Weather Forecast:</strong> ${weatherData.data[0].temp}°C, ${weatherData.data[0].weather.description}</p>
    `;

    resultSection.style.visibility = 'visible'; // Make the result section visible after rendering
};

export { getLocationData, getWeatherData, getLocationImage, renderTripDetails, calculateTripLength };
