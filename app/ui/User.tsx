import prisma from "../lib/db"

async function User() {

  const users = await prisma.user.findMany()

  

  return (
    <ul className="list-none">
      {
        users.map(user => (
          <li key={user.name}>
              {user.name}
          </li>
        ))
      }
    </ul>
  )
}

export default User