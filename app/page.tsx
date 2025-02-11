import Image from "next/image";
import prisma from "./lib/db"

export default async function Page() {
  const [fruits, vegetables] = await Promise.all([
    prisma.legumes.findMany(),
    prisma.fruits.findMany(),
    prisma.vegetables.findMany()
  ]);

  return (
    <section className="flex">
      <ul>
        {
          vegetables.map(e => {
            return (
              <li key={e.id}>
                <p>{e.name}</p>
                <Image src={e.image === 'none' ? 'https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg' : e.image} width={240} height={120} alt="none" />
              </li>
            )
          })

        }
      </ul>
      <ul>
        {
          fruits.map(e =>
          (
            <li key={e.id}>{e.name}</li>
          )
          )
        }
      </ul>
    </section>
  )
}
