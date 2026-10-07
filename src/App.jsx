import { useState } from 'react'
import './index.css'
import MainLayout from './Layouts/mainlayout';
import ProductDetail from './pages/frontpages/produkdetail';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './Layouts/adminlayout';
import AdminDashboard from './pages/Adminpages/admindashboard';
import AboutPage from './pages/Adminpages/aboutpages';
import Cart from './pages/frontpages/cart';
import Dashboard from './pages/frontpages/dashboard';
import Checkout from './pages/frontpages/checkout';

function App() { 
  return ( 
    // <> 
    //   <div className="min-h-screen bg-gray-100 flex items-center justify-center"> 
    //     <div className="bg-white p-8 rounded-md shadow-md text-center max-w-md"> 
    //       <h1 className="text-2xl font-bold text-blue-600 mb-3">
    //         Welcome to My Admin
    //       </h1> 
    //       <p className="text-gray-600">
    //         Your Tailwind CSS React app is ready!
    //       </p> 
    //     </div> 
    //   </div> 
    // </> 
    
    <Routes>
      <Route path="/" element={<MainLayout/>} >
        <Route path="Dashboard" element={<Dashboard />} /> 
        <Route path="product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Route>

 <Route path="checkout" element={<Checkout />} />
      <Route path="/admin" element={<AdminLayout />}> 
        {/* Default route di dalam AdminLayout */} 
        {/* mapping path ke component page, gunakan autocompletion */} 
        <Route path="dashboard" element={<AdminDashboard />} /> 
        <Route path="about" element={<AboutPage />} /> 
      </Route> 
    </Routes>

  ); 
}

export default App