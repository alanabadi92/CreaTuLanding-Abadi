import { useState } from 'react'
import './App.css'
import Title from './assets/components/Title/Title'
import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title/>

      <NavBar/>
     
      <ItemListContainer title="Bienvenido"/>
      
    </>
  )
}

export default App
