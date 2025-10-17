import { Router } from "express";
import Resena from "../models/Resena.js";

const router = Router();

// 🟢 Obtener todas las reseñas
router.get("/", async (req, res) => {
  try {
    const resenas = await Resena.find().populate("juego").sort({ createdAt: -1 });
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔵 Crear una reseña
router.post("/", async (req, res) => {
  try {
    const nuevaResena = new Resena(req.body);
    await nuevaResena.save();
    res.status(201).json(nuevaResena);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🟠 Actualizar una reseña
router.put("/:id", async (req, res) => {
  try {
    const resena = await Resena.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(resena);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔴 Eliminar una reseña
router.delete("/:id", async (req, res) => {
  try {
    await Resena.findByIdAndDelete(req.params.id);
    res.json({ message: "Reseña eliminada correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
