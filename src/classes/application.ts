import express, { Express, Router } from 'express';
import configApp from '../config/app';
import apiRoutes from '../routes/api';

export default class Application {
  private app!: Express;
  private port!: number;

  constructor () {
    this.init();
  }

  /**
   * Initial the application
   */
  private init(): void {
    this.port = configApp.port;
    this.app = express();

    this.addRouteGroup('/api', apiRoutes);
  }

  /**
   * Bootup the application
   */
  boot() {
    this.runAppServer();
  }

  /**
   * Run the application server
   */
  private runAppServer() {
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
    });
  }

  /**
   * Add route group
   * @param path route group path
   * @param router the router object
   */
  private addRouteGroup(path: string, router: Router) {
    this.app.use(path, router);
  }
}