const Joi = require('joi');
const { articleModel } = require('../models/ArticlesModel');

class ArticleController {
  static async getArticle(req, res) {
    try {
      // 1. ambil semua article dari model
      const articles = await articleModel.getArticles();
      // 2. kirim semua data ke user
      res.json({ status: 'success', data: articles });
    } catch(error) {
      console.log(error);
      res.status(500).send('Internal Server Error !')
    }
  }

  static async insertArticle(req, res) {
    try {
      // 1. bikin skema data yang boleh dikirim oleh user
      const schemaRequestBody = Joi.object({
        title: Joi.string().required(),
        body: Joi.string().required(),
        approved: Joi.boolean()
      })
      // 2. validasi data yang dikirim oleh user
      const validationResult = schemaRequestBody.validate(req.body)
      if(validationResult.error !== undefined){
        return res.status(400).send('Bad request !')
      }
      // 3. Ambil data valid dari user
      const data = req.body;
      // 4. insert data ke database
      await articleModel.insertArticle(data);
      // 5. kirim datanya ke user
      res.json({ status: 'success' })
    } catch(error) {
      console.log(error);
      res.status(500).send('Internal Server Error !')
    }
  }
};

module.exports = { ArticleController };