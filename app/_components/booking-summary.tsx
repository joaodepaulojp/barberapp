import { BarberShop, BarberShopService } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface BookingSummaryProps {
  service: Pick<BarberShopService, "name" | "price">
  barbershop: Pick<BarberShop, "name">
  selectedDate: Date
}

const BookingSummary = ({
  service,
  barbershop,
  selectedDate,
}: BookingSummaryProps) => {
  return (
    <Card className="mt-3 mb-6">
      <CardContent className="space-y-3 p-3 py-0">
        <div className="flex items-center justify-between">
          <h2>{service.name}</h2>

          <p className="text-sm font-bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(service.price))}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-400">Data</h2>

          <p className="text-sm capitalize">
            {format(selectedDate, "d 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-400">Horário</h2>

          <p className="text-sm capitalize">
            {format(selectedDate, "HH:mm", { locale: ptBR })}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-400">Barbearia</h2>

          <p className="text-sm capitalize">{barbershop.name}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookingSummary
