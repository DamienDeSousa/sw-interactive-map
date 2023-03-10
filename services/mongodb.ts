import mongoose from 'mongoose'

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI ?? ''

  await mongoose.connect(uri)

  return mongoose.connection
}
