export interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}
