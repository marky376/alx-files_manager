import express from 'express';
import injections from './routes/index.js';
import injectRoutes from './routes/index.js';

/**
 * Creating an Express application.
 */

const app = express();

/**
 * Middleware to parse JSON request bodies.
 */

app.use(express.json());

/**
 * Load all routes
 */

injectRoutes(app);

/**
 * Set the port from the environment variable or use 5000 as a default.
 */
const PORT = process.env.PORT || 5000;

/**
 * Start the Express application.
 */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;