import Link from "next/link";

export default function FoodLayout({ children }) {
  return (
    <div className="text-black min-h-screen" style={{backgroundColor: "#c8b273"}}>
      <div className="navbar">
    <Link href="/"><header className="header">Food<span>Bing</span></header></Link>
      <Link href="/create"><button> Buat makanan</button></Link>
      </div>
      {children}
    </div>
  );
}
