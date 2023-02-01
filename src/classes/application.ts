import express, { Express, Router } from 'express';
import configApp from '../config/app';
import apiRoutes from '../routes/api';

export default class Application {
  private app!: Express;
  private port!: number;

  constructor () {
    this.init();
  }

  private init() {
    this.port = configApp.port;
    this.app = express();

    this.initRouteGroup('/api', apiRoutes);
  }

  boot() {
    this.runAppServer();
  }

  private runAppServer() {
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
    });
  }

  private initRouteGroup(path: string, router: Router) {
    this.app.use(path, router);
  }
}