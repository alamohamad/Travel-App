import './styles/styles.scss';

import { getLocationData, getWeatherData, getLocationImage, renderTripDetails, calculateTripLength } from './js/app';

// Add a listener for the form submission
document.getElementById('travel-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Capture the user's input
    const location = document.getElementById('location').value.trim();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    try {
        // Get the coordinates based on the provided location
        const coordinates = await getLocationData(location);

        // Get the weather forecast using the retrieved coordinates
        const weather = await getWeatherData(coordinates.latitude, coordinates.longitude);

        // Retrieve an image that represents the provided location
        const imageUrl = await getLocationImage(location);

        // Determine the trip's duration in days
        const tripDuration = calculateTripLength(startDate, endDate);

        // Present the trip details to the user
        renderTripDetails(coordinates, weather, imageUrl, startDate, endDate, tripDuration);
    } catch (err) {
        console.error('There was a problem retrieving data:', err); 
        alert('Unable to fetch data. Please verify your input or try again later.'); 
    }
});
