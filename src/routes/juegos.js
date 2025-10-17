import { Router } from "express";
import Juego from "../models/Juego.js";

const router = Router();

// 🟢 Obtener todos los juegos
router.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ createdAt: -1 });
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔵 Crear un juego nuevo
router.post("/", async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    await nuevoJuego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🟠 Actualizar un juego
router.put("/:id", async (req, res) => {
  try {
    const juego = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(juego);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔴 Eliminar un juego
router.delete("/:id", async (req, res) => {
  try {
    await Juego.findByIdAndDelete(req.params.id);
    res.json({ message: "Juego eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
