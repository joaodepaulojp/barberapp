import { BarberShop } from "@prisma/client"
import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"

interface BarberShopItemProps {
  barberShop: BarberShop
}

const BarberShopItem = ({ barberShop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl p-0">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="rounded-2xl object-cover"
            src={barberShop.imageUrl}
            alt={barberShop.name}
          />

          <Badge
            className="absolute top-2 left-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barberShop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barberShop.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            Agendar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
