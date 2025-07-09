import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").del();

  await knex("products").insert([
    { name: "Margherita Pizza", price: 25.99 },
    { name: "Pepperoni Pizza", price: 29.99 },
    { name: "Veggie Burger", price: 19.5 },
    { name: "Caesar Salad", price: 15.0 },
    { name: "Spaghetti Bolognese", price: 22.75 },
    { name: "Grilled Chicken Sandwich", price: 18.0 },
    { name: "French Fries", price: 8.5 },
    { name: "Chocolate Cake", price: 12.0 },
    { name: "Lemonade", price: 6.0 },
    { name: "Espresso", price: 5.0 },
  ]);
}
