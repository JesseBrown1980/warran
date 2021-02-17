import { ServerError } from '../error'
import { NotFoundError } from '../error/resource-not-found'
import { HttpResponse } from './https'

export const badRequest = (error: Error): HttpResponse =>
({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data?: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204
})


export const notFound = (): HttpResponse =>
({
  statusCode: 404,
  body: new NotFoundError()
})
