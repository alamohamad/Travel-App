import { calculateTripLength } from "../app"; // Import the function to be tested

// Grouping related tests under a common description
describe('Trip Duration Calculation', () => {

    // A single test case for calculating trip duration
    it('should accurately calculate the trip duration in days', () => {
        // Define the start and end dates for the trip
        const startDate = '2024-09-01';
        const endDate = '2024-09-10';

        // Expected duration based on the dates provided
        const expectedDuration = 9;

        // Call the function with the test data
        const actualDuration = calculateTripLength(startDate, endDate);

        // Check if the actual duration matches the expected duration
        expect(actualDuration).toEqual(expectedDuration);
    });

});
