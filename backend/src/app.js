import express from 'express';
const app = express();

app.use(express.json());

// import routes
import userRoutes from './routes/user.route.js';

// routes declaration
app.use(express.json());

app.use('/api/v1/users', userRoutes);
 
//example of routes http://localhost:8000/api/v1/users/register

export default app;