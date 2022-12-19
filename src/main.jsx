import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NotFoundView from './components/NotFoundView';

// import PokemonsTypeView from './components/PokemonsTypeView';
const PokemonTypeView = lazy(() => import('./components/PokemonsTypeView'));
//                         👆
// You can lazy-load your component, this is recommended when a component has many operations before loading the actual component
// @see {@link https://beta.reactjs.org/apis/react/lazy#lazy-loading-components-with-suspense-suspense-for-code-splitting}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<NotFoundView />} />
        <Route
          path="/type/:typeId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PokemonTypeView />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
