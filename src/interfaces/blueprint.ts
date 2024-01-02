export interface Blueprint {
  id?(): void;
  string?(column: string, length: number): void;
  bigInteger?(column: string): void;
  decimal?(column: string, precision: number, scale: number): void;
  boolean?(column: string): void;
  dateTime?(column: string): void;
  date?(column: string): void;
  json?(column: string): void;
  timestamps?(): void;
}