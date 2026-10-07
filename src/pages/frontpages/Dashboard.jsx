// // import { Link } from "react-router-dom"; 
// import { products } from "../../utils/data";
// import ProductCard from "../../components/productcard";
 
// export default function Dashboard() { 
//   return ( 
//     <div> 
//       <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1> 
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
        

//       {/* blok kode di atas bisa diedit menjadi berikut */}
//         {products.map((item) => (
//           //p adalah props untuk mengirim data produk ke komponen ProductCard
//           <ProductCard p={item} />
//         ))}
//       </div> 
//     </div> 
//   ); 
// } 

import { products } from "../../utils/data";
import ProductCard from "../../components/productcard";
import { useSearchParams } from "react-router-dom";

export default function Dashboard() {
    const [searchParams] = useSearchParams();

    const brand = searchParams.get("brand");

    const filteredProducts = brand
      ? products.filter((item) => item.brand === brand)
      : products;

  return (
    <div className="bg-gray-50 min-h-screen">

          {/* HERO */}
          <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

              <div className="grid grid-cols-2 items-center">

                {/* Teks */}
                <div className="p-12">
                  <p className="text-red-600 font-semibold mb-3">
                     Produk Terbaru
                  </p>

                  <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                    Model Kit
                    <br />
                    <span className="text-red-600">
                      Motor Nuclear MNP-CR02A Type-65 JiHu-II - Assault Ver.
                    </span>
                  </h1>

                  <p className="text-gray-600 mt-5 mb-6 leading-relaxed">
                    Temukan berbagai model kit terbaru dan terbaik
                    untuk menambah koleksi kamu.
                  </p>

                  <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-all duration-300 hover:shadow-lg">
                    Belanja Sekarang →
                  </button>
                </div>

                {/* FOTO */}
                <div className="h-96 flex items-center justify-end pr-10">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ3IKgb96pCzG0eUZ4BmdO-0M_QWRYg5PTzIxy0yNDQ&s=10"
                    alt="Model Kit"
                    className="w-4/5 h-80 object-contain object-center"
                  />
                </div>

              </div>

            </div>
          </section>

      {/* PRODUK */}
      <section className="max-w-7xl mx-auto px-6 pb-10">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Produk Pilihan
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Temukan model kit pilihan untuk koleksi kamu
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              p={item}
            />
          ))}
        </div>

      </section>

    </div>
  );
}