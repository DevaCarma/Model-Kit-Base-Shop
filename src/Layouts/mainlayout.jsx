import { Outlet } from "react-router-dom"; 
import Navbar from "../component/navbar"; 
// import Sidebar from "../components/Sidebar";

export default function MainLayout() { 
  return ( 
    <div className="flex flex-col min-h-screen"> 
      {/* Header/Navbar */} 
      <Navbar />
      {/* < Sidebar /> */}
 
      {/* Search & Filter 
      <header className="bg-gray-100 p-4 flex flex-col md:flex-row gap-2 justify-between items-center"> 
        <input 
          type="text" 
          placeholder="Khilaf apa hari ini..." 
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg" 
        /> 
        <select className="px-4 py-2 border rounded-lg"> 
          <option>Semua Kategori</option> 
          <option>Bandai</option> 
          <option>In Era</option> 
          <option>Motor Nuclear</option> 
        </select> 
      </header> 
  */}
      {/* Main Section */} 
      <main className="flex-1 p-6"> 
        <Outlet /> 
      </main> 
 
      {/* Footer */} 
      <footer className="bg-gray-800 text-white text-center p-4"> 
        <p>© 2025 E-Commerce Model Kit Base App | Version 1.0</p> 
      </footer> 
    </div> 
  ); 
} 