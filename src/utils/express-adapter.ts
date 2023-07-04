import { Request, Response } from 'express'
import { HttpResponse, HttpRequest } from '../interfaces/http'

export const adapterRoute = (controller: Function) => {
  return async (req: HttpRequest, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {})
    }
    const httpResponse = await controller(request)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      return res.status(httpResponse.statusCode).json({
        error: httpResponse.body
      })
    }
  }
}
