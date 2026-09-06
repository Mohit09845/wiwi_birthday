const mongoose = require('mongoose');

// Vercel Serverless MongoDB Global Cache
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr || connStr.includes('your_mongodb_uri') || connStr.includes('user:password')) {
      console.log('⚠️ MongoDB Atlas URI not fully configured. Server will run in resilient local/mock mode.');
      return false;
    }
    
    if (cached.conn) {
      console.log('⚡ Using cached MongoDB connection');
      return cached.conn;
    }

    if (!cached.promise) {
      console.log('🔌 Connecting to MongoDB Atlas (Cold Start)...');
      cached.promise = mongoose.connect(connStr, {
        serverSelectionTimeoutMS: 8000,
        family: 4 // Force IPv4 to prevent Windows DNS resolution glitches
      }).then((mongoose) => mongoose);
    }
    
    cached.conn = await cached.promise;
    console.log(`✅ MongoDB Atlas Connected`);
    return true;
  } catch (error) {
    console.error('❌ EXACT MONGODB ATLAS ERROR:', error);
    console.warn('⚠️ Continuing with persistent file/in-memory fallback mode.');
    return false;
  }
};

module.exports = connectDB;
