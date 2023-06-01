import './App.css'
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import PrivateRoutes from './components/PrivateRoutes'
import Quotes from './components/Quotes'
import Quote from './components/Quote'
import { Error } from './components/Error'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route element={<PrivateRoutes />} >
          <Route path="/quotes" element={<Quotes/>} />
          <Route path="/quote/:author" element={<Quote/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
