const request = require('supertest');
const app = require('./server'); 

describe('Server root route', () => {
    // Closing the server after all tests to free up resources
    afterAll(() => {
        app.close(); 
    });

    it('should return the index.html content', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toMatch(/html/);
    });
});
