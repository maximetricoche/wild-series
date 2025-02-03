import { useEffect, useRef, useState, type ReactNode } from "react";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
  errors?: Record<string, string>;
}

export default function ProgramForm({
  children,
  defaultValue,
  onSubmit,
  errors,
}: ProgramFormProps) {
  const [image, setImage] = useState("");
  const [areaSize, setAreaSize] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAreaSize(event.target.value);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  return (
    <section className="flex justify-center gap-10">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const title = formData.get("title") as string;
          const synopsis = formData.get("synopsis") as string;
          const poster = formData.get("poster") as string;
          const country = formData.get("country") as string;
          const year = formData.get("year");
          const category_id = formData.get("category_id");

          onSubmit({
            title,
            synopsis,
            poster,
            country,
            year: year ? Number(year) : 0,
            category_id: category_id ? Number(category_id) : 0,
          });
        }}
        className="flex flex-col w-2/4 space-y-4"
      >
        <label htmlFor="title" className="font-semibold">
          Titre
        </label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={defaultValue.title}
          className={`${errors?.title ? "border-red-500" : ""} p-2 border rounded-md`}
        />
        {errors?.title && <p className="text-red-500 ">{errors?.title}</p>}

        <label htmlFor="synopsis" className="font-semibold">
          Synopsis
        </label>
        <textarea
          ref={textareaRef}
          name="synopsis"
          id="synopsis"
          defaultValue={defaultValue.synopsis}
          className={`${errors?.synopsis ? "border-red-500" : ""} h-auto p-2 border rounded-md `}
          style={{ resize: "none" }}
          onChange={handleAreaChange}
        />
        {errors?.synopsis && <p className="text-red-500">{errors?.synopsis}</p>}

        <label htmlFor="poster" className="font-semibold">
          Lien de l'affiche
        </label>
        <input
          type="text"
          name="poster"
          id="poster"
          defaultValue={defaultValue.poster}
          className={`${errors?.poster ? "border-red-500" : ""} p-2 border rounded-md`}
          onChange={handleChange}
        />
        {errors?.poster && <p className="text-red-500">{errors?.poster}</p>}

        <label htmlFor="country" className="font-semibold">
          Pays
        </label>
        <input
          type="text"
          name="country"
          id="country"
          defaultValue={defaultValue.country}
          className={`${errors?.country ? "border-red-500" : ""} p-2 border rounded-md`}
        />
        {errors?.country && <p className="text-red-500">{errors?.country}</p>}

        <label htmlFor="year" className="font-semibold">
          Année
        </label>
        <input
          type="number"
          name="year"
          id="year"
          defaultValue={defaultValue.year}
          className={`${errors?.year ? "border-red-500" : ""} p-2 border rounded-md`}
        />
        {errors?.year && <p className="text-red-500">{errors?.year}</p>}

        <label htmlFor="category" className="font-semibold">
          Catégorie
        </label>
        <input
          type="number"
          name="category_id"
          id="category"
          defaultValue={defaultValue.category_id}
          className={`${errors?.category_id ? "border-red-500" : ""} p-2 border rounded-md`}
        />
        {errors?.category_id && (
          <p className="text-red-500">{errors?.category_id}</p>
        )}

        <button
          type="submit"
          className="p-2 px-5 py-2 mx-auto bg-green-600 rounded-md text-green-50 hover:bg-green-700"
        >
          {children}
        </button>
      </form>

      <figure className="space-y-4 w-72">
        <figcaption className="font-semibold text-center">
          Prévisualisation de l'affiche
        </figcaption>
        <img
          src={image || defaultValue.poster}
          alt=""
          className="object-cover"
        />
      </figure>
    </section>
  );
}
