import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/page/home'

export const AppRouter = () => {
  
  return (
    <Routes>
      <>
        <Route path = '/' element = { <Home/> }/>
        <Route path = '/*' element = { <Navigate to = '/' /> }/>
      </>
    </Routes>
  )
}
