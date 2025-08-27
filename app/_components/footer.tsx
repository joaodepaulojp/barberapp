import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-0xl p-0">
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2025 Copyright <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
