import type { ReactNode } from "react";

type CategoryData = {
  name: string;
};

interface CategoryFormProps {
  children: ReactNode;
  defaultValue: CategoryData;
  onSubmit: (category: CategoryData) => void;
}

export default function CategoryForm({
  children,
  defaultValue,
  onSubmit,
}: CategoryFormProps) {
  return (
    <form
      className="flex justify-center gap-4"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get("name") as string;

        onSubmit({ name });
      }}
    >
      <input
        type="text"
        name="name"
        className="p-2 border rounded-md "
        defaultValue={defaultValue.name}
      />
      <button
        type="submit"
        className="px-5 py-2 bg-green-600 rounded-md text-green-50 hover:bg-green-700"
      >
        {children}
      </button>
    </form>
  );
}
