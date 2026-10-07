// // import { Link } from "react-router-dom";
// // import { useCart } from "../context/CartContext";

// // export default function ProductCard({ p }) {
// //   const { addToCart } = useCart();

// //   return (
// //     <div className="border rounded-lg p-4 shadow hover:shadow-lg bg-white">
// //       <img
// //         src={p.img}
// //         alt={p.name}
// //         className="w-full h-40 object-cover rounded mb-2"
// //       />
// //       <h2 className="font-semibold text-lg">{p.name}</h2>
// //       <p className="text-gray-600 mb-2">Rp {p.price.toLocaleString()}</p>

// //       <Link
// //         to={`/product/${p.slug}`}
// //         state={p}
// //         className="text-blue-600 hover:underline block mb-3 text-sm"
// //       >
// //         Lihat Detail
// //       </Link>

// //       <button
// //         type="button"
// //         onClick={() => addToCart(p)}
// //         className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium"
// //       >
// //         Add to Cart
// //       </button>
// //     </div>
// //   );
// // }
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function ProductCard({ p }) {
//   const { addToCart } = useCart();

//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg bg-white">
//       <img
//         src={p.img}
//         alt={p.name}
//         className="w-full h-64 object-cover object-[center_15%] rounded mb-2"
//       />

//       <h2 className="font-semibold text-lg">
//         {p.name}
//       </h2>

//       <p className="text-gray-600 mb-2">
//         Rp {p.price.toLocaleString()}
//       </p>

//       <Link
//         to={`/product/${p.slug}`}
//         state={p}
//         className="text-blue-600 hover:underline block mb-3 text-sm"
//       >
//         Lihat Detail
//       </Link>

//       <button
//         type="button"
//         onClick={() => addToCart(p)}
//         className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Gambar */}
        <div className="h-48 bg-gray-100 overflow-hidden">
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>

      {/* Isi */}
      <div className="p-4">

        <h2 className="font-semibold text-base text-gray-900 line-clamp-2 min-h-[48px]">
          {p.name}
        </h2>

        <p className="text-lg font-bold text-red-600 mt-2">
          Rp {p.price.toLocaleString()}
        </p>

        <Link
          to={`/product/${p.slug}`}
          state={p}
          className="text-blue-600 hover:underline text-sm block mt-2 mb-3"
        >
          Lihat Detail
        </Link>

        <button
          type="button"
          onClick={() => addToCart(p)}
          className="w-full py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition text-sm font-medium"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}