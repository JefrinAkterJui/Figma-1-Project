
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayOutOne from './LayOuts/LayOutOne'
import Home from './Pages/Home'

function App() {
  const MyRoute=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayOutOne/>}>
          <Route index element={<Home/>}/>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App
