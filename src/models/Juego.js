import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  plataforma: { type: String, required: true },
  genero: { type: String, default: "" },
  horasJugadas: { type: Number, default: 0 },
  completado: { type: Boolean, default: false },
  portada: { type: String, default: "" } // URL de la imagen
}, { timestamps: true });

export default mongoose.model("Juego", juegoSchema);
