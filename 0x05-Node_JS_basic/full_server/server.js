import express from 'express';
import router from './routes/index.js';

const app = express();
app.use('/', router);
app.listen(1254);
export default app;
