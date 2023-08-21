import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import Layout from "./pages/Layout"
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<ShowCreators />} />
            <Route index={false} path="/:id" element={<ViewCreator />} />
            <Route index={false} path="/new" element={<AddCreator />} />
            <Route index={false} path="/edit/:id" element={<EditCreator />} />
            <Route index={false} path="*" element={ <NotFound /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
