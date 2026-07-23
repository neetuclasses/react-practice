import { useState} from 'react';
import Test from './test';


function App() {
  const username = ' I am Neetu';

  return (
    <>
   <Test/>
   <h1> Who are you {username}</h1>
   <p>  Your chef</p>

   </>
  )
}

export default App
