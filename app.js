const express = require("express"),
<<<<<<< HEAD
      path = require("path"),
      app = express(),
      productRutas = require("./routers/productRoute"),
      usersRutas = require("./routers/userRoute");
=======
  path = require("path"),
  app = express();
>>>>>>> 87c3c502cbe32f3dc22fa32b976e045ed78d788e

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(process.env.PORT || 3000, () => {
<<<<<<< HEAD
    console.log("Servidor de maquetado corriendo");
})

app.use("/", productRutas)
app.use("/productCart", productRutas)
app.use("/productDetail", productRutas)
app.use("/productos", productRutas)

app.use("/ayuda", usersRutas)
app.use("/register", usersRutas)
app.use("/login", usersRutas)
app.use("/restablecer", usersRutas)
/* app.get("/", (req,res) => {
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
}) */

app.set("view engine", "ejs")

app.set("views","views")
=======
  console.log("Servidor de maquetado corriendo");
});
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/productos", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productos.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});
app.get("/ayuda", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/ayuda.html"));
});
app.get("/restablecer", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/restablecer.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

app.get("/productEdit", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productEdit.html"));
});
>>>>>>> 87c3c502cbe32f3dc22fa32b976e045ed78d788e
