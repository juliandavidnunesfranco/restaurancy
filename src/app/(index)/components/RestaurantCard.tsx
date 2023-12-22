
import Link from "next/link";
import DynamicFavoriteButton from "./DinamicFavoriteButton";

export default function RestaurantCard({restaurant}: {restaurant: {
  id: string;
  name: string;
  image: string;
  description: string;
  score: number;
  ratings: number;
}}) {
  return (
    <article>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold items-center hover:text-purple-400">
        <Link href={`/${restaurant.id}`}>
          <span >{restaurant.name}</span>
        </Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
        <DynamicFavoriteButton restaurant={restaurant}/>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}