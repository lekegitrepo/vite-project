import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from '../components/Home'
import { PageNotFound } from '../components/PageNotFound'
import TodoGrid from '../TodoGrid'
import '../App.css'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> |{' '}
            <Link to="/todolist">View Todo List</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<TodoGrid />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
