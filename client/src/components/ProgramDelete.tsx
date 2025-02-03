import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type ProgramDeleteFormProps = {
  id: number;
  children: ReactNode;
};

export default function ProgramDeleteForm({
  id,
  children,
}: ProgramDeleteFormProps) {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/programs");
          }
        });
      }}
    >
      <button
        type="submit"
        className="px-5 py-2 bg-red-600 rounded-md text-indigo-50 hover:bg-red-700"
      >
        {children}
      </button>
    </form>
  );
}
