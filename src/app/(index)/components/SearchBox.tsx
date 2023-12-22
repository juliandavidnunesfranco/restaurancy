/* 'use client'

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = event.currentTarget.query.value.trim(); // Trim para manejar espacios en blanco

    if (query !== '') {
      router.push(`/?q=${encodeURIComponent(query)}`);
    } else {
      // Si la búsqueda está vacía, redirigir al index sin query
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inline-flex gap-2 mb-4">
      <input defaultValue={initialQuery} className="px-2" name="query" />
      <button type="submit" className="p-2 bg-white/20">Search</button>
    </form>
  );
}
 */

import { redirect } from "next/navigation";

export default function SearchBox({ initialQuery }: { initialQuery: string }) {

   async function searchAction(formData: FormData) {
    'use server'
    const query = formData.get('query')?.toString().trim() || '';
    redirect(`/?q=${encodeURIComponent(query)}`);
  }

  return (
    <form action={searchAction} className="inline-flex gap-2 mb-4">
      <input defaultValue={initialQuery} className="px-2" name="query" />
      <button type="submit" className="p-2 bg-white/20">
        Search
      </button>
    </form>
  );
}




