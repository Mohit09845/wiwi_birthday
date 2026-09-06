const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr || connStr.includes('your_mongodb_uri') || connStr.includes('user:password')) {
      console.log('⚠️ MongoDB Atlas URI not fully configured. Server will run in resilient local/mock mode.');
      return false;
    }
    
    console.log('🔌 Connecting to MongoDB Atlas...');
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 8000,
      family: 4 // Force IPv4 to prevent Windows DNS resolution glitches
    });
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error('❌ EXACT MONGODB ATLAS ERROR:');
    console.error('Message:', error.message);
    console.error('Code:', error.code);
    console.error('Syscall:', error.syscall);
    console.error('Full Error Object:', error);
    console.warn('⚠️ Continuing with persistent file/in-memory fallback mode.');
    return false;
  }
};

module.exports = connectDB;
