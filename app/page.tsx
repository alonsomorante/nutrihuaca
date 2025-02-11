// import Image from "next/image";
// import prisma from "./lib/db"

import ComponentTest from "@/components/ui/component";
// import Square from "@/components/ui/square";


export default async function Page() {
  // const [fruits, vegetables] = await Promise.all([
  //   prisma.legumes.findMany(),
  //   prisma.fruits.findMany(),
  //   prisma.vegetables.findMany()
  // ]);

  return (
    <section className="w-full h-screen">
      {/* <ul className="flex flex-col">
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
      </ul> */}
      {/* <p className="text-4xl">asd</p> */}
      {/* <ul>
        {
          fruits.map(e =>
          (
            <li key={e.id}>{e.name}</li>
          )
          )
        }
      </ul> */}
      {/* <p className="text-t">asdad</p> */}
      {/* <Square /> */}
      <ComponentTest />
    </section>
  )
} 
