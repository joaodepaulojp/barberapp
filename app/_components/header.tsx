import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"

const header = () => {
  return (
    <Card className="rounded-0xl p-0">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image src="/logo-fsw.png" alt="FSW Barber" height={18} width={120} />
        </Link>

        <p className="text-xs text-gray-600">
          Desenvolved by{" "}
          <span className="font-bold text-gray-400">João de Paulo</span>
          <br />
          <Link href="https://joaodepaulo.site" className="hover:underline">
            Acesse:{" "}
            <span className="font-bold text-gray-400">
              www.joaodepaulo.site
            </span>
          </Link>
        </p>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="secondary">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default header
