import express from 'express';
import dotenv from 'dotenv';
import { router as routes } from './routes/index.js';


const app = express();
dotenv.config();



app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);
const PORT = process.env.PORT || 5001;


//deneme


app.listen(PORT, () => {
    console.log(`Sunucu başlatıldı, http://localhost:${PORT}`);
});

