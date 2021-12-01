const express = require("express"),
path = require("path"),
app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor de maquetado corriendo");
})
app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})

app.get("/index", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})

app.get("/productos", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/productos.html"))
})

app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.get("/productDetail", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"))
})
app.get("/ayuda", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/ayuda.html"))
})
app.get("/restablecer", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/restablecer.html"))
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
app.get("/productCart", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/productCart.html"))
})