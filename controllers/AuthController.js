const { userModel } = require('../models/UserModel');
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');

class AuthController {
  static async login(req, res) {
    try {
      // 1. Ambil data dari usernya
      const payload = req.body;
      const username = payload.username;
      const password = payload.password;
      // 2. Cari data usernya di database
      const userData = await userModel.getUserData(username);
      // 3. Kalau data user ga ada, lempar error
      if(userData.length === 0) {
        return res.status(400).json({ message: 'invalid username/password' });
      }
      // 4. kalau passwordnya ga match, lempar error
      const hashedPassword = CryptoJS.HmacSHA256(password, process.env.SECRET_LOGIN).toString();
      if(userData[0].password !== hashedPassword) {
        return res.status(400).json({ message: 'invalid username/password' });
      }
      // 5. passwordnya match, bikin token otorisasi dgn jwt
      const token = JWT.sign({ username, id: userData[0].id }, process.env.SECRET_JWT, { expiresIn: '1h' })
      // 6. kirim tokennya ke user
      res.json({ message: 'success', token })
    } catch(error) {
      console.log(error);
      res.status(500).json({ messaee: 'Internal Server Error !' })
    }
  }
}

module.exports = { AuthController }