export class InsuficientFundsError extends Error {
  constructor() {
    super('Insuficient Funds')
    this.name = 'InsuficientFundsError'
  }
}
