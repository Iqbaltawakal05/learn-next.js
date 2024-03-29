export default function FoodForm({ title, defaultNama, defaultUrlGambar, defaultDescription, defaultIngredients, onSubmitFood, loading }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("namaMakanan");
    const imageUrl = formData.get("gambarMakanan");
    const description = formData.get("deskripsiMakanan");
    const ingredients = formData.get("bahanMakanan");

    onSubmitFood({ name, imageUrl, description: `${description}`, ingredients: [ `${ingredients}` ] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-xl text-center font-bold">{title}</h5>

      <label>Nama:</label>
      <input defaultValue={defaultNama} name="namaMakanan" className="text-black" placeholder="nama makanan" />

      <label>URL Gambar:</label>
      <input defaultValue={defaultUrlGambar} name="gambarMakanan" className="text-black" placeholder="url gambar" />

      <label>Deskripsi:</label>
      <textarea defaultValue={defaultDescription} name="deskripsiMakanan" className="text-black" placeholder="deskripsi makanan" />

      <label>Bahan:</label>
      <input defaultValue={defaultIngredients} name="bahanMakanan" className="text-black" placeholder="bahan makanan" />

      <button
        type="submit"
        disabled={loading}
        className="formButton"
      >
        {title}
      </button>
    </form>
  );
}
