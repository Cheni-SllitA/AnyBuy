import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container">
      <h1>AnyBuy</h1>
      <p>Trending products • Fast delivery • Best prices</p>

      <div className="product-grid">
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
