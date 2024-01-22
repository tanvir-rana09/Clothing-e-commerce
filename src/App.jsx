import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Products from './Pages/Products'
import ShopCatagory from './Pages/ShopCatagory'
import LoginSignup from './Pages/LoginSignup'
import Footter from "./Components/Footter/Footter"
import menBanner from './Components/Images/men-banner.jpg'
import womenBanner from './Components/Images/women-banner.jpg'
import kidBanner from './Components/Images/kids-banner.jpg'
import BannerText from './Images/Banner'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCatagory bannerText={BannerText.men} banner={menBanner} category="men" />} />
        <Route path='/womens' element={<ShopCatagory bannerText={BannerText.women} banner={womenBanner} category="women" />} />
        <Route path='/kids' element={<ShopCatagory bannerText={BannerText.kid} banner={kidBanner} category="kid" />} />
        <Route path='/product' element={<Products />} >
          <Route path=':productId' element={<Products />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footter />
    </BrowserRouter>
  )
}

export default App
