export default function FoodLayout({ children }) {
  return (
    <div className="bg-slate-200 text-black min-h-screen">
      <header className="text-6xl font-bold">FOOD WENAK</header>
      {children}
    </div>
  );
}
