import './registerMicroApp'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from '@/layout'
import routes from '@/router'

type AppPropsType = {
  basePath?: string
}
declare const window: {__POWERED_BY_QIANKUN__: boolean}

function App(props: AppPropsType) {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? props?.basePath : '/'}>
      <div className="App">
        <Nav routes={routes} />
        <div id="pageContainer" className="page-container">
          <Routes>
            {routes.map(({ name, path, component: C }) => (
              <Route key={name} path={path} element={<C />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
