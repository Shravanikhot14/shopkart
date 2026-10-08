import { useState } from 'react';

import './App.css';
import Product from './components/Product';
import Counter from './components/Counter';
import State from './components/State';
import Recipes from './components/Recipes';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

function App() {
  
  return (
    <>
     
     <RouterProvider router={routes}/>
    
    </>
  );
}

export default App;
