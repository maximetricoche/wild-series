import { useNavigate } from "react-router-dom";

import ProgramForm from "../components/ProgramForm";
import { useState } from "react";

export default function ProgramNew() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const newProgram = {
    title: "",
    synopsis: "",
    poster: "",
    country: "",
    year: 0,
    category_id: 0,
  };

  return (
    <ProgramForm
      defaultValue={newProgram}
      errors={errors}
      onSubmit={(programData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(programData),
        }).then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            setErrors(data.errors || {});
          } else {
            setErrors({});
            navigate("/programs");
          }
        });
      }}
    >
      Ajouter
    </ProgramForm>
  );
}
