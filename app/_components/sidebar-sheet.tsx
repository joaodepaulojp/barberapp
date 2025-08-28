import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { QuickSearchOptions } from "../_constants/quickSearch"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>

        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          <h2 className="font-bold">Olá, faça seu login!</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <LogInIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
              <DialogHeader>
                <DialogTitle>Faça login na plataforma!</DialogTitle>
                <DialogDescription>
                  Conecte-se com sua conta do Google.
                </DialogDescription>
              </DialogHeader>

              <Button variant="outline" className="gap-1 font-bold">
                <Image src="/google.svg" alt="google" width={18} height={18} />
                Google
              </Button>
            </DialogContent>
          </Dialog>
          {/* <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Avatar>

          <div>
            <p className="font-bold">João de Paulo</p>
            <p className="text-xs">joaodepaulo@joaodepaulo.site</p>
          </div> */}
        </div>

        <div className="flex flex-col gap-2 border-b border-solid py-4">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Inicio
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>

        <div className="flex flex-col gap-2 border-b border-solid py-4">
          {QuickSearchOptions.map((option) => (
            <Button
              key={option.title}
              className="justify-start gap-2"
              variant="ghost"
            >
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={18}
                height={18}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-2 py-4">
          <Button className="justify-start gap-2" variant="ghost">
            <LogOutIcon size={18} />
            Sair da Conta
          </Button>
        </div>
      </SheetHeader>
    </SheetContent>
  )
}

export default SidebarSheet
