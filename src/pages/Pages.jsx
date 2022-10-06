import React from 'react'
import Searched from './Searched'
import Home from './Home'
import Cuisine from './Cuisine'
import Recipe from './Recipe'
import{Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

//AnimatePresence helps with fading out 

function Pages() {
  const location = useLocation();
  return (

    //Send all the location with the path and components
<AnimatePresence exitBeforeEnter>
<Routes location={location} key={location.pathname}>
<Route path="/" element={<Home/>}/>
<Route path="/cuisine/:type" element={<Cuisine />}/>
<Route path="/searched/:search" element={<Searched/>}/>
<Route path="/recipe/:name" element={<Recipe/>}/>
</Routes>
</AnimatePresence>
    
  )
}

export default Pages