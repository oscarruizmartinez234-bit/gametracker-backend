import mongoose from "mongoose";

const resenaSchema = new mongoose.Schema({
  juego: { type: mongoose.Schema.Types.ObjectId, ref: "Juego", required: true },
  autor: { type: String, required: true },
  puntuacion: { type: Number, min: 1, max: 5, required: true },
  comentario: { type: String, default: "" }
}, { timestamps: true });

export default mongoose.model("Resena", resenaSchema);
