const { sequelize } = require('../config');
const { DataTypes } = require('sequelize');

class ArticleModel {
  #model = sequelize.define('Articles', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.TEXT
    },
    approved: {
      type: DataTypes.BOOLEAN
    }
  }, {
    tableName: 'Articles'
  })

  // === QUERY
  async getArticles() {
    const data = await this.#model.findAll({ raw: true });
    return data;
  }

  async insertArticle(data) {
    const insertedData = await this.#model.create(data)
    return insertedData;
  }
};

const articleModel = new ArticleModel();
module.exports = { articleModel }