module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_NAME || 'tabtracker',
    password: process.env.DB_NAME || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
    }
  }
}
