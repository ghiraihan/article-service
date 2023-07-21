var admin = require("firebase-admin");
var serviceAccount = require('./belajar-firebase-binar-firebase-adminsdk-v2odb-2c12c9a773.json');

// credentials
// serviceAccount.type = process.env.FIREBASE_TYPE;
// serviceAccount.project_id = process.env.FIREBASE_PROJECT_ID;
// serviceAccount.private_key_id = process.env.FIREBASE_PRIVATE_KEY_ID;
// serviceAccount.private_key = process.env.FIREBASE_PRIVATE_KEY;
// serviceAccount.client_email = process.env.FIREBASE_CLIENT_EMAIL;
// serviceAccount.client_id = process.env.FIREBASE_CLIENT_ID;
// serviceAccount.auth_uri = process.env.FIREBASE_AUTH_URI;
// serviceAccount.token_uri = process.env.FIREBASE_TOKEN_URI;
// serviceAccount.auth_provider_x509_cert_url = process.env.FIREBASE_AUTH_PROVIDER;
// serviceAccount.client_x509_cert_url = process.env.FIREBASE_CLIENT_CERT;
// serviceAccount.universe_domain = process.env.FIREBASE_UNI_DOMAIN

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://belajar-firebase-binar.appspot.com'
});

const storage = admin.storage().bucket();

async function uploadFile(path, filename) {
  const hasilUpload = await storage.upload(path, {
    destination: 'upload/' + filename
  })

  return hasilUpload;
}

async function downloadFile(filename) {
  const hasilDownload = await storage.file('upload/' + filename).getSignedUrl({ action: 'read', expires: '2023-07-20' })
  return hasilDownload
}

module.exports = { uploadFile, downloadFile };
