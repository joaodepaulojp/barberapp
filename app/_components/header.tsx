import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { MenuIcon } from "lucide-react"

const header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="Logo" src="/logo.png" width={120} height={30} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default header
