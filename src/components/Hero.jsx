export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trending Products at Best Prices
        </h2>
        <p className="mb-6 text-white/90">
          Fast delivery • Cash on Delivery • Trusted Store
        </p>

        <a href="#products">
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow">
            Shop Now
          </button>
        </a>
      </div>
    </section>
  );
}
