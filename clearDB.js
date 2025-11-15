import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function clearDatabase() {
    try {
        // Usa la misma conexión que tu app
        await mongoose.connect(process.env.MONGODB_URI);
        
        const dbName = mongoose.connection.db.databaseName;
        console.log(`🗑️  Borrando base de datos: ${dbName}`);
        
        await mongoose.connection.db.dropDatabase();
        console.log('✅ Base de datos borrada exitosamente');
        
        await mongoose.connection.close();
        console.log('🔌 Conexión cerrada');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
    process.exit();
}

clearDatabase();