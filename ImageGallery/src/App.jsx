import { useState } from 'react'

import './styles/header-styles.css'

//components
import NavBar from './components/navBar'

function App() {
const [search,setSearch]=useState('')


const submitHandler=(e)=>{
  e.preventDefault()
  console.log(search)
}
  return (
    <>
    <NavBar/>
      <div className="header">
        <h2 className='title'>Image Gallery</h2>
        <h3 className='search-title'>Search Image</h3>
        <form onSubmit={submitHandler}>
          <input className='input-field' type="text" placeholder='for example- Train' onChange={(e)=>setSearch(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
