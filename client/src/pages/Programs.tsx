import { Link, useLoaderData } from "react-router-dom";

type ProgramsData = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: string;
};

export default function Programs() {
  const programsData = useLoaderData() as ProgramsData[];

  return (
    <>
      <section className="flex items-start justify-between">
        <h2 className="mb-10 text-2xl text-center uppercase">
          Liste des programmes
        </h2>
        <Link
          to={"/programs/new"}
          className="px-5 py-2 bg-green-600 rounded-md text-green-50 hover:bg-green-700"
        >
          Ajouter
        </Link>
      </section>

      <section className="flex flex-wrap justify-center gap-4">
        {programsData.map((program) => (
          <Link to={`/programs/${program.id}`} key={program.id}>
            <article className="space-y-2">
              <figure className="w-48">
                <img src={program.poster} alt={program.title} />
              </figure>
              <h3 className="w-32 text-center">{program.title}</h3>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
}
