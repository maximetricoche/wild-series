import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

import programActions from "./modules/program/programActions";

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
router.put("/api/programs/:id", validateProgram, programActions.edit);
router.post("/api/programs", validateProgram, programActions.add);
router.delete("/api/programs/:id", programActions.destroy);

/* ************************************************************************* */

import categoryActions from "./modules/category/categoryActions";
import validateProgram from "./middlewares/validateNewProgram";

router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);
router.put("/api/categories/:id", categoryActions.edit);
router.post("/api/categories", categoryActions.add);
router.delete("/api/categories/:id", categoryActions.destroy);

/* ************************************************************************* */

export default router;
