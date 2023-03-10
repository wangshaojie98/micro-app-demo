import React from 'react'
import { Link } from 'react-router-dom'
import { type TypeRoutes } from '@/router/type'

const Empty = () => '' as unknown as JSX.Element
interface IProps {
  routes: TypeRoutes[]
}
const Nav = ({ routes }: IProps) => (
  <div className='navigation'>
    <Empty />
    <ul className="navigation-box">
      {routes.map(({ name, path }) => (
        <li key={name}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Nav
