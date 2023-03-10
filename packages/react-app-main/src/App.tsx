import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from '@/layout'
import routes from '@/router'

function App() {
  return (
    <Router>
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
