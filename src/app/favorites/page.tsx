"use client";
import {useEffect, useState} from "react";
import Link from "next/link";

import RestaurantCard from "../(index)/components/RestaurantCard";
import api from "../../api";

export default function Page() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const restaurantes = await api.list();
        const favoriteString = JSON.parse(window.localStorage.getItem("favorites") || "[]");
        const favoritesData = restaurantes.filter((restaurant) =>
          favoriteString.includes(restaurant.id),
        );

        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // useEffect will run only once when the component mounts

  return (
    <section className="container mx-auto mt-8">
      <h2 className="mb-4  text-2xl font-semibold">Tus Restaurantes Favoritos</h2>
      {favorites.length === 0 && <p>No hay restaurantes favoritos aún.</p>}
      <Link className="mb-3 inline-flex items-center gap-2 text-sm" href="/">
        <span>← Back to restaurants</span>
      </Link>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <RestaurantCard restaurant={favorite} />
          </div>
        ))}
      </div>
    </section>
  );
}
