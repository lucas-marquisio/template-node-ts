import { HttpRequest, HttpResponse } from '@/interfaces/http'
import { Ok } from '@/utils/http-response'
import { Count } from '@/services/count'

export async function Example (request: HttpRequest): Promise<HttpResponse> {
  try {
    const response = await console.log('')
    const responseCount = Count(1, 2)
    return Ok({ message: responseCount })
  } catch (error) {
    return {
      statusCode: 500,
      body: { error }
    }
  }
}
