import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"
import Link from "next/link"

interface BarbershopPageProps {
  params: Promise<{ id: string }>
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const { id } = await params

  const barbershop = await db.barberShop.findUnique({
    where: { id },
  })

  if (!barbershop) {
    return <p>Ops! Não encontrei nenhuma barbearia...</p>
  }

  return (
    <div className="relative h-[250px] w-full">
      <Image
        alt={barbershop?.name}
        src={barbershop?.imageUrl}
        fill
        className="object-cover"
      />

      <Button size="icon" variant="secondary" className="absolute top-4 left-4">
        <Link href="/">
          <ChevronLeftIcon />
        </Link>
      </Button>

      <Button
        size="icon"
        variant="secondary"
        className="absolute top-4 right-4"
      >
        <MenuIcon />
      </Button>
    </div>
  )
}

export default BarbershopPage
