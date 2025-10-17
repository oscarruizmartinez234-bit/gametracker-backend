import express from "express";
import cors from "cors";
import juegosRoutes from "./routes/juegos.js";
import resenasRoutes from "./routes/resenas.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api/juegos", juegosRoutes);
app.use("/api/resenas", resenasRoutes);

// Ruta de prueba
app.get("/", (req, res) => res.send("GameTracker API funcionando 🚀"));

export default app;
