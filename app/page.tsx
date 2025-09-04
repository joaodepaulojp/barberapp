import header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"
import { QuickSearchOptions } from "./_constants/quickSearch"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"
import { authOptions } from "./_lib/auth"
import { getServerSession } from "next-auth"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"

const Home = async () => {
  const session = await getServerSession(authOptions)
  // db connection
  const barbershops = await db.barberShop.findMany({})
  const popularBarbershops = await db.barberShop.findMany({
    orderBy: { name: "desc" },
  })
  //console.log({barbershops})

  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: (session.user as any).id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              barberShop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : []

  return (
    <div>
      {header()}
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "Bem Vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd ", { locale: ptBR })}
          </span>
          de
          <span className="capitalize">
            {format(new Date(), " MMMM", { locale: ptBR })}
          </span>
        </p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {QuickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {confirmedBookings.length > 0 && (
          <>
            {/*Booking item*/}
            <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
              Agendamentos
            </h2>

            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
