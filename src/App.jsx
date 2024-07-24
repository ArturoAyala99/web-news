import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import { useFetch } from './Hooks/useFecth';

function App() {
  const {news, api_fetch} = useFetch();//usando el customHook para reutilizar un solo fetch y un solo useEffect

  return (
    <>
      <Navbar
        news={news}
        api_fetch={api_fetch}
      />
      
    </>
  )
}

export default App
