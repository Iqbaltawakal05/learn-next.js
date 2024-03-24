import axios from "axios";
import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import FoodLayout from "@/layout/FoodLayout";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.idMakanan}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", kataKunci: "Kopi enak bikin kembung" },
  });

  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const { loading, post } = usePost();

  const handleUpdateFood = async ({ name, imageUrl, description, ingredients }) => {
    post(`/update-food/${food.id}`, { name, imageUrl, description, ingredients });
  };

  return (
    <FoodLayout>
      <img src={food?.imageUrl} className="w-64 aspect-video" />
      <FoodForm
        title={`Update ${food.name}`}
        defaultNama={food.name}
        defaultUrlGambar={food.imageUrl}
        loading={loading}
        onSubmitFood={handleUpdateFood}
      />
    </FoodLayout>
  );
}
