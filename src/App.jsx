import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import ShowCreators from './pages/ShowCreators'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<ShowCreators />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
