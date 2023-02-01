import express, { Express } from 'express';
import configApp from '../config/app';
import apiRoutes from '../routes/api';
import apiMiddleware from '../middlewares/api-middlewares';

export default class Application {
  private app!: Express;
  private port!: number;

  private groups = [
    {
      path: '/api',
      router: apiRoutes,
      middlewares: [apiMiddleware]
    }
  ];

  constructor () {
    this.init();
  }

  /**
   * Initial the application
   */
  private init(): void {
    this.port = configApp.port;
    this.app = express();

    this.initRouteGroups();
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
  private initRouteGroups() {

    this.groups.forEach(group => {
      const middlewares = group.middlewares;
      middlewares.forEach(middleware => {
        this.app.use(middleware);
      });

      this.app.use(group.path, group.router);
    });
  }
}