import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



function PopularPackages() {
  return (
    <div className="container text-center pt-8">
      
      <div className="tag bg-white">
          Popular Packages.
      </div>

      <div className="py-8 md:ml-4 lg:ml-32 w-auto md:max-w-3xl px-10">

        <Carousel className="">
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-10 md:pl-4 lg:pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>

    </div>
  )
}
export default PopularPackages