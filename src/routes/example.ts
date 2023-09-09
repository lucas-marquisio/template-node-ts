import { Router } from 'express'
import { Example } from '@/controllers/example'
import { adapterRoute } from '@/services/express-adapter'

export default (route: Router): void => {
  route.get('/', adapterRoute(Example))
}
