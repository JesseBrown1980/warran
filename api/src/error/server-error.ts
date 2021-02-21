import { BaseError } from "./base-error";

export class ServerError extends BaseError {
  constructor(message = 'Server Error') {
    super(message, 500);
  }
}


