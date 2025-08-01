import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'

export const Custom = () => {
  return (
    <section
      id="custom"
      className="relative overflow-hidden py-20 bg-gradient-to-r from-[#fef6e4] via-[#fde68a] to-[#fef6e4] text-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Захиалгат хувцас</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Таны хүссэн загвар, хэмжээ, өнгөөр тусгай захиалгат хувцас бэлтгэж
              байна. Мэргэжлийн оёдолчид таны бүх хүсэлтийг биелүүлнэ.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 text-sm font-bold">✓</span>
                </div>
                <span>Хувийн хэмжээгээр тохируулга</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 text-sm font-bold">✓</span>
                </div>
                <span>Өөрийн сонголтын даавуу, өнгө</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 text-sm font-bold">✓</span>
                </div>
                <span>Уламжлалт болон орчин үеийн загвар</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 text-sm font-bold">✓</span>
                </div>
                <span>15-30 хоногийн хугацаанд бэлэн</span>
              </div>
            </div>
          </div>
          <Card className="bg-white text-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">
                Захиалга өгөх
              </CardTitle>
              <CardDescription>
                Та доорх маягтыг бөглөж захиалга өгнө үү
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Нэр</Label>
                  <Input id="firstName" placeholder="Таны нэр" />
                </div>
                <div>
                  <Label htmlFor="lastName">Овог</Label>
                  <Input id="lastName" placeholder="Таны овог" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Утасны дугаар</Label>
                <Input id="phone" placeholder="99123456" />
              </div>
              <div>
                <Label htmlFor="email">И-мэйл хаяг</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <Label htmlFor="productType">Бүтээгдэхүүний төрөл</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>Дээл</option>
                  <option>Цамц</option>
                  <option>Малгай</option>
                  <option>Гутал</option>
                  <option>Бусад</option>
                </select>
              </div>
              <div>
                <Label htmlFor="description">Дэлгэрэнгүй тайлбар</Label>
                <Textarea
                  id="description"
                  placeholder="Таны хүссэн загвар, өнгө, хэмжээ, бусад шаардлагыг бичнэ үү..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Захиалга илгээх
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
