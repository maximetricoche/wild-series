import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Category = {
  id: number;
  name: string;
};

class CategoryRepository {
  // Create
  async create(category: Omit<Category, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO category (name) VALUES (?)",
      [category.name],
    );

    return result.insertId;
  }

  // Read
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM category WHERE id = ?",
      [id],
    );

    return rows[0] as Category;
  }

  // Read All
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM category");

    return rows as Category[];
  }

  // Update
  async update(category: Category) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE category SET name = ? WHERE id = ?",
      [category.name, category.id],
    );

    return result.affectedRows;
  }

  // Delete
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM category WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new CategoryRepository();
