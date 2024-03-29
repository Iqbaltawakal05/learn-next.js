import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import FoodLayout from "@/layout/FoodLayout";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFoods = async () => {
      setLoading(true);
      const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
      });

      setData(resp.data.data);
      setLoading(false);
    };

    getFoods();
  }, []);

  if (loading) return <div>Loading . . .</div>;

  return (
    <FoodLayout>
    <div className="main">
      {data.map((food) => (
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
