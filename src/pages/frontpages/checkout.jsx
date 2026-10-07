import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesanan berhasil dikonfirmasi!");
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow border mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Checkout Pesanan
      </h1>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
        <h2 className="font-semibold mb-2 text-gray-700">Ringkasan Belanja:</h2>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Keranjang masih kosong.</p>
        ) : (
          <ul className="text-sm space-y-1 mb-2 divide-y">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-1">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span className="font-medium">
                  Rp {(item.price * item.qty).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="border-t pt-2 font-bold flex justify-between text-base">
          <span>Total Pembayaran:</span>
          <span className="text-blue-600">
            Rp {totalPrice.toLocaleString()}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            required
            placeholder="Masukkan nama penerima"
            className="w-full border rounded-lg p-2.5 text-sm focus:outline-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Alamat Pengiriman
          </label>
          <textarea
            rows="3"
            required
            placeholder="Alamat lengkap tujuan pengiriman"
            className="w-full border rounded-lg p-2.5 text-sm focus:outline-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Metode Pembayaran
          </label>
          <select className="w-full border rounded-lg p-2.5 text-sm bg-white focus:outline-blue-500">
            <option>Transfer Bank (BCA / Mandiri)</option>
            <option>E-Wallet (GoPay / QRIS)</option>
            <option>Cash on Delivery (COD)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={cart.length === 0}
          className="w-full bg-blue-600 disabled:bg-gray-300 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Konfirmasi & Pesan Sekarang
        </button>
      </form>
    </div>
  );
}