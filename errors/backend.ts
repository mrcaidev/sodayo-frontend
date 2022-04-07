export class BackendError extends Error {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.name = "Backend Error";
    this.code = code;
  }
}
