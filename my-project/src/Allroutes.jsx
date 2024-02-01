import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Welcome from './Components/Welcome'
import MainPage from './Components/MainPage'
import Form from './Components/From'
import { RecoilRoot } from 'recoil'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Welcome/>} > </Route>
           <Route path='/main' element={<MainPage/>}></Route>
              <Route path='/form' element={<RecoilRoot> <Form/></RecoilRoot>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes