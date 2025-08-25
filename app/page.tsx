import { SearchIcon } from "lucide-react"
import header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
  return (
    <div>
      {header()}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João!</h2>
        <p>Segunda-feira, 25 de Agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-bold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png" />
                </Avatar>
                <p className="text-sm">Instituto de Beleza Joana de Paulo</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">25</p>
              <p className="text-sm">18:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
