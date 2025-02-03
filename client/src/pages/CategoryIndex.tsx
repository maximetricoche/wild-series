import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

export default function CategoryIndex() {
  const [categories, setCategories] = useState([] as Category[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((response) => response.json())
      .then((data: Category[]) => {
        setCategories(data);
      });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center space-y-6">
      <Link
        to={"/categories/new"}
        className="self-end px-5 py-2 bg-green-700 rounded-md text-green-50 hover:bg-green-600"
      >
        Ajouter
      </Link>
      <ul className="flex gap-2">
        {categories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id}>
            <li className="px-3 py-2 border rounded-md ">{category.name}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
