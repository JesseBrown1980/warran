import { BaseError } from "./base-error";

export class InvalidParameterError extends BaseError {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`, 400);
  }
}
