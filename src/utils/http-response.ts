import { HttpResponse } from '@/interfaces/http'

export const BadRequest = (body: any): HttpResponse => {
  return {
    statusCode: 400,
    body
  }
}

export const ServerError = (body: any): HttpResponse => {
  return {
    statusCode: 500,
    body
  }
}

export const Ok = (body: any): HttpResponse => {
  return {
    statusCode: 200,
    body
  }
}
