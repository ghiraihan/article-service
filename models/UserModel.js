const { sequelize } = require('../config');
const { DataTypes } = require('sequelize');

class UserModel {
  #model = sequelize.define('user', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    updatedAt: false,
    tableName: 'user',
    underscored: true
  })

  // === QUERY
  async getUserData(username) {
    const data = await this.#model.findAll({ 
      where: { username }, 
      raw: true 
    });
    return data;
  }
}

const userModel = new UserModel()
module.exports = { userModel };