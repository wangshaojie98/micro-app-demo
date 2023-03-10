import {
  Home,
  Sub1,
  Sub2
} from '@/pages'
import { type TypeRoutes } from './type'

const routers: TypeRoutes[] = [
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Sub1',
    path: '/Sub1',
    component: Sub1
  },
  {
    name: 'Sub2',
    path: '/Sub2',
    component: Sub2
  },
]

export default routers
