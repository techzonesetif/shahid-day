import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArticlesPage from './pages/articles/page';
import Home from './pages/home/page';
import Layout from './pages/layouts/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/article' element={<ArticlesPage />} />
          <Route path='/article/:link' element={<ArticlesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;