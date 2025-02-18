import { Route, Routes } from 'react-router-dom';
import './App.css';
// Remove direct imports of pages:
// import ArticlesPage from './pages/articles/page';
// import Home from './pages/home/page';
// import Article from './pages/article/page';

import Layout from './pages/layouts/Layout';
import React, { lazy, Suspense } from 'react';

// Lazy-load each page
const Home = lazy(() => import('./pages/home/page'));
const ArticlesPage = lazy(() => import('./pages/articles/page'));
const Article = lazy(() => import('./pages/article/page'));

function App() {
  return (
    // Wrap your Routes in a Suspense boundary
   
      <Routes>
        <Route path="/" element={ <Suspense fallback={<div>Loading...</div>}><Layout /></Suspense>}>
          <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path="/articles" element={<Suspense fallback={<div>Loading...</div>}><ArticlesPage /></Suspense>} />
          <Route path="/articles/:link" element={<Suspense fallback={<div>Loading...</div>}><ArticlesPage /></Suspense>} />
          <Route path="/article" element={<Suspense fallback={<div>Loading...</div>}><ArticlesPage /></Suspense>} />
          <Route path="/article/:link" element={<Suspense fallback={<div>Loading...</div>}><Article /></Suspense>} />
        </Route>
      </Routes>
    
  );
}

export default App;
