import { WalletBusiness } from "../business";
import { UserDatabase, WalletDatabase } from "../data";
import { InvalidParameterError, MissingParameterError } from "../error";
import { InsuficientFundsError } from "../error/insuficient-funds-error";
import { NotFoundError } from "../error/resource-not-found";

const makeWalletBusiness = () => {
  const userDatabase = new UserDatabase();
  const walletDatabase = new WalletDatabase();
  return new WalletBusiness(walletDatabase, userDatabase)
}

describe('getStatement()', () => {
  test('should return 400 when there is no user id provided', async () => {
    const userBusiness = makeWalletBusiness()

    const response = await userBusiness.getStatement('', 1, 1, 1)
    expect(response).toEqual(new MissingParameterError('user_id'))
  });

  test('should return 404 when there is no user bound to the id provided', async () => {
    const userBusiness = makeWalletBusiness()

    const response = await userBusiness.getStatement('602c80394f7d3e32ec4183aa', 1, 1, 1)
    expect(response).toEqual(new NotFoundError())
  });

  test('should return 404 when there is no user bound to the id provided', async () => {
    const userBusiness = makeWalletBusiness()

    const response = await userBusiness.getStatement('invalid_id', 1, 1, 1)
    expect(response).toEqual(new InvalidParameterError('user_id'))
  });
});

describe('handleTransaction()', () => {
  test('should return 400 when the amount provided to the transaction is bellow 0', async () => {
    try {
      const userBusiness = makeWalletBusiness()

      await userBusiness.handleTransaction({ amount: -1, category: 'payment', user_id: '602c80394f7d3e32ec4183aa' })

    } catch (error) {
      expect(error).toEqual(new InvalidParameterError('amount'))
    }
  });

  test('should return 404 when there is no user bound to the id provided', async () => {
    const userBusiness = makeWalletBusiness()

    const response = await userBusiness.handleTransaction({ amount: 100, category: 'payment', user_id: '602c80394f7d3e32ec4183aa' })
    expect(response).toEqual(new NotFoundError())
  });

  test('should return 400 when the transaction category provided is different from payment. deposit or withdrawl', async () => {
    try {
      const userBusiness = makeWalletBusiness()

      await userBusiness.handleTransaction({ amount: 100, category: 'invalid_category', user_id: '602c80394f7d3e32ec4183aa' })
      

    } catch (error) {
      expect(error).toEqual(new InvalidParameterError('category'))
    }

  });

  test('should return 400 when there is no sufficient funds', async () => {
    try {
      const userBusiness = makeWalletBusiness()

      await userBusiness.handleTransaction({ amount: 500, category: 'payment', user_id: '602c982bba4ca81124ae0b2b' })


    } catch (error) {
      expect(error).toEqual(new InsuficientFundsError())
    }

  });

  // test('should return 404 when there is no user bound to the id provided', async () => {
  //   const userBusiness = makeWalletBusiness()

  //   const response = await userBusiness.getStatement('invalid_id', 1, 1, 1)
  //   expect(response).toEqual(new InvalidParameterError('user_id'))
  // });
});


