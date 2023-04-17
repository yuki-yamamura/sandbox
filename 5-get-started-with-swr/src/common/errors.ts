export class NetworkError extends Error {
  readonly status: number;
  readonly info: string;

  constructor(status: number, info: string, message?: string) {
    super(message);
    this.status = status;
    this.info = info;
  }
}
