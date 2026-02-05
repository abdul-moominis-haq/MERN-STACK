import express from 'express';
const app = express();

app.use(express.json());

// import routes
import userRoutes from './routes/user.route.js';

// routes declaration
app.use(express.json());

app.use('/api/users', userRoutes);
 
//example of routes  localhost:8000/api/users/register

export default app;