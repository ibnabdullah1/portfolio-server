import { Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { ProjectRoutes } from '../modules/project/project.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
