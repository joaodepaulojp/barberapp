import { db } from "../_lib/prisma"
import BarberShopItem from "../_components/barbershop-item"
import Header from "../_components/header"
import Search from "../_components/search"

interface BarbershopPageProps {
  searchParams: {
    search?: string
  }
}

const BarbershopsPage = async ({ searchParams }: BarbershopPageProps) => {
  const search = searchParams?.search ?? ""

  const barbershops = await db.barberShop.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="mb-6 px-5">
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Resultados para &quot;{searchParams.search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
