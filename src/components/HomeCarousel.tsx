'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import ancientHomes from '@/assets/homeImages/ancientHomes.jpg'
import beautifulTaj from '@/assets/homeImages/beautifulTaj.jpg'
import boats from '@/assets/homeImages/boats.jpg'
import buffalo from '@/assets/homeImages/buffalo.jpg'
import dove from '@/assets/homeImages/dove.jpg'
import goldenTemple from '@/assets/homeImages/goldenTemple.jpg'
import lakeView from '@/assets/homeImages/lakeView.jpg'
import lion from '@/assets/homeImages/lion.jpg'
import mountainView from '@/assets/homeImages/mountainView.jpg'
import peacock from '@/assets/homeImages/peacock.jpg'
import riverView from '@/assets/homeImages/riverView.jpg'
import tajmahal from '@/assets/homeImages/tajmahal.jpg'
import teaPlant from '@/assets/homeImages/teaPlant.jpg'
import trainView from '@/assets/homeImages/trainView.jpg'
import villageOx from '@/assets/homeImages/villageOx.jpg'
import Image from "next/image"


const data: any = [ancientHomes, beautifulTaj, boats, buffalo, dove, goldenTemple, lakeView, lion, mountainView, 
peacock, riverView, tajmahal, teaPlant, trainView, villageOx, ]


export function HomeCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)


  const plugin:any = React.useRef(
    Autoplay({ delay: 3000 })
  )


  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
     <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>

        {data.map((ddd:any, index:string) => (
          <CarouselItem key={index}>
            {/* <div className="p-1 border-x-4 border-cyan-800 ">
            <div className="p-4 border-y-4 border-pink-700 ">
            <div className="p-3 border-y-4 border-pink-700 ">
            <div className="p-2 border-y-4 border-pink-700 ">

              <div className="p-1 border-y-4 border-pink-700 "> */}
                <Card>
                  <CardContent className="relative flex aspect-square items-center justify-center ">
                      <Image src={ddd} alt="image" fill />
                  </CardContent>
                </Card>
              {/* </div>
              </div>
              </div>
              </div>
            </div> */}
          </CarouselItem>
        ))}

      </CarouselContent> 
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
