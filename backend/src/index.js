import dotenv from 'dotenv';
import connectBD from './config/database.js';
import app from './app.js';
dotenv.config({
    path: './.env'
});
 
const startServer  = async ( ) => {
    try{
        await connectBD;
        app.on('error', (error) => {
            console.error('MongoDB Server Not Connected:', error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(` MongoDB Server is running on port:  ${process.env.PORT || 8000}`);
        });
    }
    catch(error){
        console.error('Failed starting MongoDB server:', error);

    }
}
 startServer();