const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
router.get('/detalle/:menuId', productController.readDetail);

module.exports = router;
