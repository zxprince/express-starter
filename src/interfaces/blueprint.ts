export interface Blueprint {
  id?(): void;
  string?(column: string): void;
  timestamps?(): void;
}