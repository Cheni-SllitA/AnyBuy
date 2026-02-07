export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">AnyBuy</h1>

        <a
          href="https://facebook.com/messages/t/yourpage"
          target="_blank"
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Message Us
        </a>
      </div>
    </header>
  );
}
