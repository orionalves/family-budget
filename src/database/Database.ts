import mongoose, { connect } from 'mongoose'

class Database {
  static async initialize() {
    mongoose.connection.once('open', () => {
      console.log('Database initialized.')
    })
    if (!process.env.DATABASE_URL) {
      return console.log('Database URL not found!')
    }
    await connect(process.env.DATABASE_URL)
  }
}

export { Database }
