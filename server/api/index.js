import express from 'express';
import cors from 'cors';
import { connectDB } from './database';

import createRouter from './router';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

createRouter(app);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on port: ${PORT}`);
});
