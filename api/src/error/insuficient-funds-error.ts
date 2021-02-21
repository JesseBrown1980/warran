import { BaseError } from "./base-error";

export class InsuficientFundsError extends BaseError {
  constructor(message = 'Insuficient Funds') {
    super(message, 400);
  }
}
