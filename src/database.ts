import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb+srv://sakthi:Admin123@cluster0.1zkv4dm.mongodb.net/', {
            dbName: 'hub-hires'
        });

        console.log('Database is connected');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

export default connectDatabase;
