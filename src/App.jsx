import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticlesPage from './pages/articles/page'

function App() {

  return (
    <>
          <Routes>
            <Route path='/' element={<div/>}/>
            <Route path='/article' element={<ArticlesPage/>}/>
            <Route path='/article/:link' element={<ArticlesPage/>}/>
          </Routes>
    </>
  )
}

export default App
