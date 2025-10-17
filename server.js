import app from "./src/app.js";
import { connectDB } from "./src/database.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al iniciar el servidor:", err);
  });
