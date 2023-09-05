import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    if (error instanceof Error) console.error(`Error: ${error.message}`);
    else console.log('Unexpected error', error);
    // Exit process with failure
    process.exit(1);
  }
}

export default connectDB;
