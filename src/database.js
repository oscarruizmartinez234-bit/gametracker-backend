import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("Intentando conectar a MongoDB con URI:", uri); // 👈 línea nueva para depuración

    if (!uri) throw new Error("❌ No se encontró la variable MONGODB_URI en .env");

    await mongoose.connect(uri);
    console.log("✅ Conectado correctamente a MongoDB Atlas");
  } catch (error) {
    console.error("💥 Error al conectar con MongoDB:", error.message);
    process.exit(1);
  }
};

