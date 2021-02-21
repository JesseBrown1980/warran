import { BaseError } from "./base-error";

export class MissingParameterError extends BaseError {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`, 400);
  }
}

