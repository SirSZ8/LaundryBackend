const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", require("./apps/user/UserControllers"));
app.use("/barang", require("./apps/barang/BarangControllers"));
app.use("/pelanggan", require("./apps/pelanggan/PelangganControllers"));
app.use("/pembelian", require("./apps/pembelian/PembelianControllers"));

module.exports = app;
