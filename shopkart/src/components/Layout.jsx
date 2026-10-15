import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'
import {ErrorBoundary} from "react-error-boundary";

function Layout()

{
  return (
    <div>
        <Navbar/>
        <ErrorBoundary fallbackRender={({error, resetErrorBoundary})=>{
          return <>
          <h1 className='bg-danger text-white text-center'>Something went wrong</h1>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Try again</button>
          </>
        }}>
          <Outlet/>
        </ErrorBoundary>
        
    </div>
  )
}

export default Layout;
