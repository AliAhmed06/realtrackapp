// import mongoose from "mongoose";

// export async function connect(){
//     try {
//         mongoose.connect(process.env.MONGO_URL);
//         const connection  = mongoose.connection;

//         connection.on('connected', () => {
//             console.log('MongoDb Connected Successfully');
//         })

//         connection.on('error', (err) => {
//             console.log('MongoDb connection error. Please make sure mongodb is running.' + err);
//             process.exit();
//         })
//     } catch (error) {
//         console.log("Something went wrong");
//         console.log(error);
//     }
// }   

import { connect } from "mongoose"

const MONGODB_URI = process.env.MONGO_URL

if (!MONGODB_URI || MONGODB_URI.length === 0) {
  throw new Error("Please add your MongoDB URI to .env.local")
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  if (cached.conn) {
    console.log("🚀 Using cached connection")
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    }

    cached.promise = connect(MONGODB_URI, opts)
      .then(mongoose => {
        console.log("✅ New connection established")
        return mongoose
      })
      .catch(error => {
        console.error("Connection to database failed")
        throw error
      })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default connectDB
