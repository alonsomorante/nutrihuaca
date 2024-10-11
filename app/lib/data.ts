import { sql } from '@vercel/postgres'

export async function OwnerAndPets() {
  try {
  const data = await sql`SELECT * FROM pets`;

  return data.rows
} catch (error) {
  console.error('Database Error:', error);
  throw new Error('Failed to fetch revenue data.');
}
}