import { useLoaderData } from "react-router-dom";

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
      <h2>Liste des programmes</h2>
      <ul>
        {programsData.map((program) => (
          <li key={program.id}>
            <img src={program.poster} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.synopsis}</p>
            <ul>
              <li>{program.country}</li>
              <li>{program.year}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
