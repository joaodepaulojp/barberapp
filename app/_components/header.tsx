import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"

const header = () => {
  return (
    <Card className="rounded-0xl p-0">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="Logo" src="/logo.png" width={120} height={30} />

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
