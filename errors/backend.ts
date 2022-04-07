export class BackendError extends Error {
  code: number;

  constructor(code: number = 400, message: string = "") {
    super(message);
    this.name = "Backend Error";
    this.code = code;
  }
}
