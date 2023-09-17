import mongoose, { connect } from 'mongoose'

class Database {
  static async initialize() {
    if (!process.env.DATABASE_URL) {
      return console.error('Database initialization failed: Database URL not found.')
    }
    mongoose.connection.once('open', () => {
      console.log('Database connection is open:')
    })
    await connect(process.env.DATABASE_URL)
  }
}

export { Database }
