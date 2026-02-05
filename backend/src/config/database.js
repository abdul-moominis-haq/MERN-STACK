import mongose from 'mongoose';

const connectBD = async ( ) => {
    try {
       const connectionInstace = await mongose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected successfully !!! ${connectionInstace.connection.host}`);

    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
}
export default connectBD;