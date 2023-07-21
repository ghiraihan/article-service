const JWT = require('jsonwebtoken');

function AuthorizationCheck(req, res, next) {
  const token = req.headers.authorization;
  // 1. cek dia punya token atau ngga?
  if(!token) {
    // 2. kalau dia gapunya token, kasih 401
    return res.status(401).json({ message: 'Not authorized !' })
  }
  // 3. kalau dia punya token, tapi tokennya ga valid, kirim 401
  try {
    const validToken = JWT.verify(token.replace('Basic ', ''), process.env.SECRET_JWT);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Not authorized !' })
  }
  // 4. kalau dia punya token, dan tokennya valid, dia boleh akses api
  next()
}

module.exports = { AuthorizationCheck }