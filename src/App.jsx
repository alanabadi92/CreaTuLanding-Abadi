import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

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
