import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgramForm from "../components/ProgramForm";

type Program = {
  id?: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

export default function ProgramEdit() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <ProgramForm
        defaultValue={program}
        errors={errors}
        onSubmit={(programData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(programData),
          }).then(async (response) => {
            if (!response.ok) {
              const data = await response.json();
              setErrors(data.errors || {});
            } else {
              setErrors({});
              navigate("/programs");
            }
          });
        }}
      >
        Modifier
      </ProgramForm>
    )
  );
}
