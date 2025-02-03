import joi from "joi";
import type { Request, Response, NextFunction } from "express";

const programSchema = joi.object({
  title: joi.string().required().messages({
    "string.empty": "Le titre est obligatoire",
  }),
  synopsis: joi.string().required().messages({
    "string.empty": "Le synopsis est obligatoire",
  }),
  poster: joi.string().required().messages({
    "string.empty": "Le lien de l'affiche est obligatoire",
  }),
  country: joi.string().required().messages({
    "string.empty": "Le pays est obligatoire",
  }),
  year: joi.number().integer().min(1).required().messages({
    "number.min": "L'année est obligatoire",
  }),
  category_id: joi.number().integer().min(1).required().messages({
    "number.min": "La catégorie est obligatoire",
  }),
});

const validateProgram = (req: Request, res: Response, next: NextFunction) => {
  const { error } = programSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.reduce((acc: Record<string, string>, err) => {
      acc[err.path.join(".")] = err.message;
      return acc;
    }, {}) as Record<string, string>;

    res.status(400).json({
      message: "Validation échouée",
      errors,
    });
  } else {
    next();
  }
};

export default validateProgram;
