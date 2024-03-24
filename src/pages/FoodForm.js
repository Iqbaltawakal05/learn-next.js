export default function FoodForm({ title, defaultNama, defaultUrlGambar, onSubmitFood, loading }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("namaMakanan");
    const imageUrl = formData.get("gambarMakanan");

    onSubmitFood({ name, imageUrl, description: "    ", ingredients: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="grid w-1/2 justify-center gap-2">
      <h5 className="text-xl text-center font-bold">{title}</h5>

      <label>Nama:</label>
      <input defaultValue={defaultNama} name="namaMakanan" className="text-black" placeholder="nama makanan" />

      <label>URL Gambar:</label>
      <input defaultValue={defaultUrlGambar} name="gambarMakanan" className="text-black" placeholder="url gambar" />

      <button
        type="submit"
        disabled={loading}
        className={`${loading ? "bg-gray-500" : "bg-blue-500"} p-1 rounded-full`}
      >
        {title}
      </button>
    </form>
  );
}
