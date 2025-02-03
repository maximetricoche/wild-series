import { Link, useLoaderData } from "react-router-dom";
import ProgramDeleteForm from "../components/ProgramDelete";

type ProgramType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: string;
};

export default function ProgramDetail() {
  const program = useLoaderData() as ProgramType;

  return (
    <>
      <section className="flex justify-end gap-4 my-10">
        <Link
          to={`/programs/${program.id}/edit`}
          className="px-5 py-2 bg-indigo-600 rounded-md text-indigo-50 hover:bg-indigo-700"
        >
          Modifier
        </Link>
        <ProgramDeleteForm id={program.id}>Supprimer</ProgramDeleteForm>
      </section>

      <section className="flex w-1/2 gap-10 mx-auto">
        <article className="space-y-10 ">
          <hgroup className="flex flex-col justify-start">
            <h2 className="text-2xl font-semibold">{program.title}</h2>
            <div className="flex gap-4 font-thin text-indigo-700">
              <p>{program.country}</p>
              <p>{program.year}</p>
            </div>
          </hgroup>
          <p>{program.synopsis}</p>
        </article>

        <aside>
          <figure className="w-60">
            <img src={program.poster} alt={program.title} />
          </figure>
        </aside>
      </section>
    </>
  );
}
