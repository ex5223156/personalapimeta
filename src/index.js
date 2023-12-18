const express = require("express");
const apiruta = require("./routes/route");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api",apiruta);

app.listen(PORT, () => {
    console.log("Hola David v1 el puerto es: "+PORT);
});

console.log("Hola AnderCode");
