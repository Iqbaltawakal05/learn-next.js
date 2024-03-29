import FoodLayout from "@/layout/FoodLayout";
import axios from "axios";
import Link from "next/link";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods?page=${context.query.page}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
  });
  
  return { props: { foods: resp.data.data } };
}

export default function Home({ foods }) {
  return (
    <FoodLayout>
      <div className="main">
        {foods.map((food) => (
          <div>
            <p>{food.name}</p>
            <img src={food.imageUrl} className="w-64 aspect-video" />
            <Link href={`/ssr/${food.id}`} passHref><button className="button">detail</button></Link>
          </div>
        ))}
      </div>
    </FoodLayout>
  );
}
