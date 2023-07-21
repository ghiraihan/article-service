// ARTICLE GET
/**
 * @swagger
 * /article/get:
 *    get:
 *      summary: API ini digunakan untuk mengambil data artikel
 *      description: API ini digunakan untuk mengambil semua data artikel dalam format JSON
 *      responses:
 *        200:
 *          description: Daftar Artikel.
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: id dari artikel
 *                           example: 7
 *                         title:
 *                           type: string
 *                           description: judul dari artikel
 *                           example: Cafe baru 
 *                         body:
 *                           type: string
 *                           description: isi dari artikel
 *                           example: Bernuansa pegunungan    
 */

// INSERT ARTICLE
/**
 * @swagger
 * /article/insert:
 *    post:
 *      summary: API ini digunakan untuk menambahkan data artikel
 *      description: API ini digunakan untuk menambahkan data artikel dalam format JSON
 *      requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                     title:
 *                       type: string
 *                       description: judul dari artikel
 *                       example: Cafe baru 
 *                     body:
 *                       type: string
 *                       description: isi dari artikel
 *                       example: Bernuansa pegunungan 
 *                     approved:
 *                       type: boolean
 *                       description: artikel terverifikasi
 *                       example: true
 *                         
 *      responses:
 *        200:
 *          description: Sukses menambah artikel Artikel.
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: id dari artikel
 *                           example: 7
 *                         title:
 *                           type: string
 *                           description: judul dari artikel
 *                           example: Cafe baru 
 *                         body:
 *                           type: string
 *                           description: isi dari artikel
 *                           example: Bernuansa pegunungan    
 */