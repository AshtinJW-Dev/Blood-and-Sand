import dotenv from 'dotenv'; // Add dotenv to load environment variables
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'; // Add morgan for logging
import gladiatorsRouter from './routes/gladiators.mjs'; // Update the import path

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') }); // Load environment variables from the root directory

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Use morgan middleware for logging

app.use('/api/gladiators', gladiatorsRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Add a route to handle requests to the root URL
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Blood and Sand API');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error handling middleware:', err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
