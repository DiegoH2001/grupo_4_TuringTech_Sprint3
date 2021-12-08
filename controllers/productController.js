const productController = {
    index: (req,res) => {
        res.render("products/index")
    },
    productCart: (req,res) => {
        res.render("products/productCart")
    },
    productDetail: (req,res) => {
        res.render("products/productDetail")
    },
    productos: (req,res) => {
        res.render("products/productos")
    }
}

module.exports = productController;

