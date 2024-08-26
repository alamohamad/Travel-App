# Travel Planner

## Overview

Travel Planner is a single-page application that allows users to plan their trips by providing destination details and retrieving weather forecasts along with beautiful images of the location. The application utilizes multiple APIs to fetch data related to weather and images.

## Technologies Used

- **Web Server**: Node.js
  - Handles backend server operations and request processing.

- **Web Framework**: Express
  - Manages routing and API handling on the backend.

- **Build Tool**: [Webpack](https://webpack.js.org/)
  - **Development Mode**:
    - Includes Hot Module Replacement (HMR) for real-time updates.
    - Utilizes source maps to simplify debugging.
  - **Production Mode**:
    - Minifies code and optimizes assets for performance.
    - Supports code splitting for faster load times.
    - Integrates service workers for enhanced offline functionality.

- **Service Worker**:
  - Adds offline capabilities and caching to improve performance.

- **External APIs**:
  - **[GeoNames](http://www.geonames.org/export/web-services.html)**: Retrieves the latitude and longitude of the destination.
  - **[Weatherbit](https://www.weatherbit.io/api)**: Fetches weather forecast data for the specified location.
  - **[Pixabay](https://pixabay.com/api/docs/)**: Provides images related to the destination.

## Getting Started

# Install Dependencies
npm install

# Build for Production
npm run prod

# Start the Server
npm run start

# Start the Development Server
npm run dev


# Run Tests
npm run test
