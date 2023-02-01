import { Router } from "express";

export interface RouteGroups {
  path: string;
  router: Router;
  middlewares: [];
}