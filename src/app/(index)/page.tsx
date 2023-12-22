import Link from "next/link";
import api from "@/api";
import SearchBox from "./components/SearchBox";
import RestaurantCard from "./components/RestaurantCard";

export default async function Home({ searchParams }: { searchParams: { q: string } }) {
  const restaurants = await api.search(searchParams.q);

  return (
    <section>
       <SearchBox  initialQuery={searchParams.q || ''}/> 
       <Link href={"/favorites"} prefetch={false} className="p-5 gap-2 hover:text-purple-400">
        Favorites
       </Link>
     <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(restaurants) ? (
          restaurants.map((restaurant) => (
           <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
          ))
        ) : typeof restaurants === 'string' ? (
          <p>{restaurants}</p>
        ) : null}
      </section>
    </section>
  );
}
