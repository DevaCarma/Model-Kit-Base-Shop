// import { Link } from "react-router-dom"; 
// import { useCart } from "../context/CartContext";

// export default function Navbar(){
//     // mengambil total qty dari context useCart
//     const { totalQty } = useCart();

//     return (
//         <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center"> 
//             {/* Logo */} 
//             <Link to="/" className="font-bold text-xl"> 
//                 Model Kit Base 
//             </Link> 

//             {/* Menu Navigasi */} 
//             <div className="flex gap-6"> 
//                 {/* Dashboard Links */} 
//                 <Link to="/dashboard" className="hover:text-gray-200"> 
//                     Dashboard 
//                 </Link> 

//                 <Link to="/cart" className="hover:text-gray-200"> 
//                     Keranjang
//                     {/* tampilkan totalQty jika ada item di keranjang  */}
//                     {totalQty > 0 && (
//                         <span className=" bg-red-500 text-xs px-2 rounded-full">
//                             {totalQty}
//                         </span>
//                     )}
//                 </Link> 

//                 <Link to="/checkout" className="hover:text-gray-200"> 
//                     Checkout 
//                 </Link> 
//             </div> 
//         </nav> 
//     );
// }

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalQty } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">

      {/* BARIS PERTAMA */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">

        {/* NAMA ECOMMERCE */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-gray-900 whitespace-nowrap"
        >
          ◊ Model Kit Base
        </Link>

        {/* SEARCH */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center bg-gray-100 rounded-full px-5 py-2.5">

            <input
              type="text"
              placeholder="Khilaf apa hari ini..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* MENU UTAMA */}
        <nav className="flex items-center gap-6 text-sm font-medium">

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-red-600"
          >
            Home
          </Link>

          {/* KERANJANG */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-red-600"
          >
            Keranjang

            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </Link>
                  <Link
            to="/checkout"
            className="text-gray-700 hover:text-red-600"
          >
            Checkout
          </Link>
        </nav>
      </div>


      {/* BARIS KEDUA */}
      <div className="border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-8 text-sm">

          <Link
            to="/dashboard"
            className="font-medium text-gray-700 hover:text-red-600"
          >
            Semua Produk
          </Link>

          <Link
            to="/dashboard?brand=Bandai"
            className="font-medium text-gray-700 hover:text-red-600"
          >
            Bandai
          </Link>

          <Link
            to="/dashboard?brand=Motor Nuclear"
            className="font-medium text-gray-700 hover:text-red-600"
          >
            Motor Nuclear
          </Link>

          <Link
            to="/dashboard?brand=In Era+"
            className="font-medium text-gray-700 hover:text-red-600"
          >
            In Era+
          </Link>

          <Link
            to="/dashboard?brand=SNAA"
            className="font-medium text-gray-700 hover:text-red-600"
          >
            SNAA
          </Link>

          <Link
            to="/dashboard?brand=Infinite Dimension"
            className="font-medium text-gray-700 hover:text-red-600"
          >
            Infinite Dimension
          </Link>
          
          <Link
            to="/dashboard?brand=Wolf Technology"
            className="font-medium text-gray-700 hover:text-red-600"
          >
            Wolf Technology
          </Link>

        </div>

      </div>

    </header>
  );
}