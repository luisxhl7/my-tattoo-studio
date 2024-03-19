import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/page/home'
import { TatuadorPage } from '../components/page/tatuador/Tatuador-page';

export const AppRouter = () => {
  
  return (
    <Routes>
      <Route path = '/' element = { <Home/> }/>
      <Route path = '/*' element = { <Navigate to = '/' /> }/>
      <Route path = '/tatuador/:id' element = { <TatuadorPage/> } />
    </Routes>
  )
}
