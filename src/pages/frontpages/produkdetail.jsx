import { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const location = useLocation();
  const p = location.state;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !review.trim()) return;

    const newReview = {
      id: Date.now(),
      rating,
      review,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setReview("");
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-8">

      {/* KEMBALI */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/dashboard"
          className="text-sm text-gray-600 hover:text-red-600"
        >
          ← Kembali ke Produk
        </Link>
      </div>

      {/* DETAIL PRODUK */}
      <section className="max-w-7xl mx-auto">

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <div className="grid grid-cols-2 gap-12">

            {/* FOTO PRODUK */}
            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8 h-[500px]">
              <img
                src={p?.img}
                alt={p?.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* INFORMASI PRODUK */}
            <div className="flex flex-col justify-center">

              {/* BRAND */}
              <p className="text-red-600 font-semibold mb-2">
                {p?.brand}
              </p>

              {/* NAMA */}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {p?.name}
              </h1>

              {/* RATING */}
              <div className="flex items-center gap-2 mt-4">
                <div className="text-yellow-500 text-lg">
                  ★★★★★
                </div>

                <span className="text-gray-500 text-sm">
                  {p?.rating} / 5
                </span>
              </div>

              {/* HARGA */}
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Harga
                </p>

                <p className="text-3xl font-bold text-red-600">
                  Rp {p?.price?.toLocaleString("id-ID")}
                </p>
              </div>

              {/* STOK */}
              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Stok tersedia
                </p>

                <p className="font-semibold text-gray-800">
                  {p?.stock} unit
                </p>
              </div>

              {/* TOMBOL */}
              <button
                className="mt-8 w-full bg-red-600 hover:bg-red-700
                text-white py-3 rounded-xl font-semibold
                transition-all duration-300 hover:shadow-lg"
              >
                Tambah ke Keranjang
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* REVIEW */}
      <section className="max-w-7xl mx-auto mt-8 mb-10">

        <div className="grid grid-cols-2 gap-8">

          {/* DAFTAR REVIEW */}
          <div className="bg-white rounded-2xl shadow-sm p-8">

            <h2 className="text-xl font-bold mb-6">
              Ulasan Pembeli
            </h2>

            {reviews.length === 0 ? (
              <p className="text-gray-500">
                Belum ada review untuk produk ini.
              </p>
            ) : (

              <div className="space-y-4">

                {reviews.map((r) => (

                  <div
                    key={r.id}
                    className="border border-gray-200 rounded-xl p-4"
                  >

                    <div className="flex items-center gap-1 mb-2">

                      {[...Array(r.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-500"
                        >
                          ★
                        </span>
                      ))}

                      {[...Array(5 - r.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="text-gray-300"
                        >
                          ★
                        </span>
                      ))}

                    </div>

                    <p className="text-gray-700">
                      {r.review}
                    </p>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* FORM REVIEW */}
          <div className="bg-white rounded-2xl shadow-sm p-8">

            <h2 className="text-xl font-bold mb-6">
              Berikan Ulasan
            </h2>

            <form onSubmit={handleSubmit}>

              {/* RATING */}
              <div className="mb-5">

                <label className="block font-medium mb-2">
                  Rating
                </label>

                <div className="flex gap-2 text-3xl">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className={
                        star <= rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </button>

                  ))}

                </div>

              </div>

              {/* REVIEW */}
              <div className="mb-5">

                <label className="block font-medium mb-2">
                  Review
                </label>

                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-3
                  focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows="5"
                  placeholder="Bagaimana pengalaman kamu dengan produk ini?"
                />

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700
                text-white px-6 py-3 rounded-xl
                font-semibold transition"
              >
                Kirim Ulasan
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}