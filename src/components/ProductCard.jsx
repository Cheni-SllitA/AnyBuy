export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      
      {product.badge && (
        <span className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-br">
          {product.badge}
        </span>
      )}

      <img src={product.image} className="w-full h-52 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500">⭐⭐⭐⭐☆ (4.8)</p>

        <p className="text-xl font-bold text-primary mt-2">
          {product.price}
        </p>

        <a href={product.link} target="_blank">
          <button className="w-full mt-3 bg-primary text-white py-2 rounded-lg font-medium">
            Order on Facebook
          </button>
        </a>
      </div>
    </div>
  );
}
