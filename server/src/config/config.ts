import mongoose from "mongoose";
export class config{
    
    dbUri = process.env.MONGODB_URI;

    public async connectToDatabase() {
        if (!this.dbUri) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        try {
            await mongoose.connect(this.dbUri);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

}