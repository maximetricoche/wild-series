import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import CategoryDeleteForm from "../components/CategoryDelete";

type Category = {
  id: number;
  name: string;
};

function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null as null | Category);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`)
      .then((response) => response.json())
      .then((data: Category) => {
        setCategory(data);
      });
  }, [id]);

  return (
    category && (
      <section className="flex flex-col">
        <div className="flex justify-end gap-2">
          <Link
            to={`/categories/${category.id}/edit`}
            className="px-5 py-2 bg-indigo-600 rounded-md text-indigo-50 hover:bg-indigo-700"
          >
            Modifier
          </Link>
          <CategoryDeleteForm id={category.id}>Supprimer</CategoryDeleteForm>
        </div>
        <div className="flex justify-center">
          {" "}
          <h1 className="px-3 py-2 border rounded-md w-fit">{category.name}</h1>
        </div>
      </section>
    )
  );
}

export default CategoryDetail;
