export class ApiError extends Error {
  constructor(public errorObj: Record<string, any>) {
    super(JSON.stringify(errorObj));
    this.name = 'ApiError';
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}