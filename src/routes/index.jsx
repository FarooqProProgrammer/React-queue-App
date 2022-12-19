import React from 'react'
import Home from '../pages/Home'
import Admin from "../pages/Admin"
import About from '../pages/About'
import Token from "../pages/UserToken"
import { BrowserRouter, Route ,Routes} from 'react-router-dom'



const Routing = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route path='/Admin' element={<Admin/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Token' element={<Token/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default Routing