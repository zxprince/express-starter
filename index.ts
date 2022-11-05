import express, { Express, Request, Response } from 'express';
import config from './src/config';
import apiRoutes from './src/routes/api';

const app: Express = express();
const name = config.app.name;
const port = config.app.port;

app.get('/', (req: Request, res: Response) => {
  res.send(name);
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});