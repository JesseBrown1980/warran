import { UserBusiness } from "../business";
import { UserDatabase } from "../data";
import { InvalidParameterError } from "../error";
import { UserInputDTO } from "../model";

const makeUserBusiness = () => {
  const userDatabase = new UserDatabase();
  return new UserBusiness(userDatabase)
}


describe('createUser()', () => {
  test('It should return 400 if there is no email provided ', async () => {
    const userBusiness = makeUserBusiness()
    const user: UserInputDTO = {
      password: '123456',
      name: 'name',
      email: ''
    }
    const response = await userBusiness.createUser(user)
    expect(response).toEqual(new InvalidParameterError('email'))
  });

  test('It should return 400 if there is no password provided ', async () => {
    try {

      const userBusiness = makeUserBusiness()
      const user: UserInputDTO = {
        password: '',
        name: 'name',
        email: 'email@mail.com'
      }
      await userBusiness.createUser(user)

    } catch (error) {
      expect(error).toEqual(new Error('users validation failed: password: Password required'))

    }

  });

  test('It should return 400 if there is no name provided ', async () => {
    try {

      const userBusiness = makeUserBusiness()
      const user: UserInputDTO = {
        password: '123456',
        name: '',
        email: 'email@mail.com'
      }
      await userBusiness.createUser(user)

    } catch (error) {
      expect(error).toEqual(new Error('users validation failed: name: Name required'))

    }
  });

  test('It should call the userDatabase with the correct email ', async () => {


    const userBusiness = makeUserBusiness()
    const createUserSpy = jest.spyOn(userBusiness, 'createUser')
    const user: UserInputDTO = {
      password: '123456',
      name: 'tester',
      email: 'email@mail.com'
    }
    await userBusiness.createUser(user)

    expect(createUserSpy).toHaveBeenCalledWith(user)
  });
});