const formidable = require('formidable');
const { uploadFile, downloadFile } = require('../lib/FirebaseAdmin')

class FileController {
  static async uploadAndSaveFile(req, res) {
    const form = formidable({ uploadDir: './temp' });
    form.parse(req, function(error, fields, files) {
      if(error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error !' })
      }

      // upload file
      uploadFile(files.file.filepath, files.file.originalFilename);

      console.log('files:', files);
      console.log('fields:', fields);
      res.json({ message: 'success' });
    })
  }

  static async downloadFile(req, res) {
    const filename = req.params.filename
    const file = await downloadFile(filename);
    res.json({ url: file[0] })
  }
}

module.exports = { FileController };