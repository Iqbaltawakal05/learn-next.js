import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import FoodLayout from "@/layout/FoodLayout";
import { useRouter } from "next/router";

export default function CreateFoodPage() {
  const { post, loading } = usePost();
  const router = useRouter();

  const handleCreate = async ({ name, imageUrl, description, ingredients }) => {
    post("/create-food", { name, imageUrl, description, ingredients });

    router.push("/");
  };

  return (
    <FoodLayout>
      <FoodForm title="Buat Makanan" onSubmitFood={handleCreate} loading={loading} />
    </FoodLayout>
  );
}
