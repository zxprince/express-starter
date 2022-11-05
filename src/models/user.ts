export default class User {

  constructor () {}

  // All public functions -------------------
  // User index
  public index (filter: any) {
    return this.return([], 'index', 200);
  }

  // User Single
  public single (id: number) {
    return this.return([], 'single', 200);
  }

  // User store
  public store (data: any) {
    return this.return([], 'store', 200);
  }

  // User update
  public update (id: number, data: any) {
    return this.return([], 'update', 200);
  }

  // User delete
  public delete (id: number, softDelete: boolean) {
    return this.return([], 'delete', 200);
  }

  // Private and helper functions -----------
  private return(data: any, message: string, code: string|number) {
    return {data, message, code};
  }
}