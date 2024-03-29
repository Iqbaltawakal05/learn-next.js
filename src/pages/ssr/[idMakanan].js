import axios from "axios";
import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import FoodLayout from "@/layout/FoodLayout";
import { useRouter } from "next/router";
import useDelete from "@/hooks/useDelete";
export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.idMakanan}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", kataKunci: "Kopi enak bikin kembung" },
  });

  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const { loading, post } = usePost();
  const { loading: loadingDelete, deleteFood } = useDelete();
  const router = useRouter();

  const handleUpdateFood = async ({ name, imageUrl, description, ingredients }) => {
    post(`/update-food/${food.id}`, { name, imageUrl, description, ingredients });

    router.reload();
  };

  const handleDeleteFood = async () => {
    if (confirm("Are you sure you want to delete this food?")) {
      await deleteFood(`/delete-food/${food.id}`);
      router.push("/ssr");
    }
  };

  return (
    <FoodLayout>
      <div className="Detail">
      <h1>Detail Makanan</h1>
      <p>{food?.name}</p>
      <img src={food?.imageUrl} className="w-64 aspect-video" />
      <p>{food?.description}</p>
      <p>{food?.ingredients.join(",")}</p>
      <FoodForm
        title={`Update ${food.name}`}
        defaultNama={food.name}
        defaultUrlGambar={food.imageUrl}
        defaultDescription={food.description}
        defaultIngredients={food.ingredients}
        loading={loading}
        onSubmitFood={handleUpdateFood}
      />
      <button onClick={handleDeleteFood} className="detailButton" disabled={loadingDelete} >Delete</button>
      </div>
    </FoodLayout>
  );
}
