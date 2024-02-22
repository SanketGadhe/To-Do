import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Tasks from "./Components/Tasks";

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 '>
      <Navbar/>
<Form/>
    </div>
  )
}

export default App
