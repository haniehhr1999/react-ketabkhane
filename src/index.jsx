import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Books from './Books';
import Book from './Book';
import About from './About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route path='/about' element={<About />} />
            <Route path='/books' element={<Books />}>
                <Route path=' :bookId' element={<Book />} />
            </Route>
          </Route>
      </Routes>
  </BrowserRouter>
);

