import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env");
}

let cachedClient: typeof mongoose | null = null;

const connectToDatabase = async (): Promise<typeof mongoose> => {
  if (cachedClient) {
    return cachedClient;
  }

  if (mongoose.connection.readyState) {
    cachedClient = mongoose;
    return mongoose;
  }

  try {
    await mongoose.connect(MONGO_URI);

    cachedClient = mongoose;
    console.log("Successfully connected to MongoDB");
    return mongoose;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Error connecting to MongoDB");
  }
};

export default connectToDatabase;
