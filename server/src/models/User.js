module.exports = (sequelize, Sequelize) => {
  sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    }
  });
}
