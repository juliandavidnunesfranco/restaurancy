"use client";
import dynamic from "next/dynamic";
import {useState} from "react";

function FavoriteButton({
  restaurant,
}: {
  restaurant: {
    id: string;
    name: string;
    image: string;
    description: string;
    score: number;
    ratings: number;
  };
}) {
  const favoriteString = JSON.parse(window.localStorage.getItem("favorites") || "[]");
  const isFavourite = favoriteString.includes(restaurant.id);
  const [favorite, setFavorite] = useState(isFavourite);

  return (
    <button
      className={`text-xl text-red-500 ${favorite ? "opacity-100" : "opacity-20"}`}
      type="button"
      onClick={() => {
        setFavorite(!favorite);

        const favIndex = favoriteString.indexOf(restaurant.id);

        if (!favorite) {
          if (favIndex == -1) {
            favoriteString.push(restaurant.id);
          }
        } else {
          favoriteString.splice(favIndex, 1);
        }

        window.localStorage.setItem("favorites", JSON.stringify(favoriteString));
      }}
    >
      ♥
    </button>
  );
}

// Creamos un componente dinámico para que no se renderice en el servidor
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {ssr: false});

export default DynamicFavoriteButton;
