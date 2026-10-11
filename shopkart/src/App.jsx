import { useState } from 'react';

import './App.css';
import Product from './components/Product';
import Counter from './components/Counter';
import State from './components/State';
import Recipes from './components/Recipes';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import { LoginContextProvider } from './LoginContext';

function App() {
  
  return (
    <>

    <LoginContextProvider>
      
      <RouterProvider router={routes}/>

    </LoginContextProvider>
     
     
    
    </>
  );
}

export default App;
