

const connectDB = async () => { 

  if (!process.env.MONGO_URI) {
    console.error("db uri must be defined");
    process.exit(1);
  }

  try {
    
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
};

export {connectDB,};
