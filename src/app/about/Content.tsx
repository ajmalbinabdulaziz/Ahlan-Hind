import EnquiryForm from "@/sections/EnquiryForm"


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



function Content() {
  return (
    <main className="container text-center pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_50%_at_bottom_left,#75eb2d,#f0feea_100%)] overflow-x-clip">

        <div className="tag mb-6">
                About us.
        </div>

        <div className="flex justify-around ">  

          <div>
            <Carousel className="w-full max-w-sm">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
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
              
          <div className="hidden py-16 md:inline-block md:w-[320px]">
            <EnquiryForm />
          </div>    

        </div>

        <div className="grid grid-cols-3 py-6">
          
          <div className="col-span-2 bg-white p-10">
            <h1 className="text-2xl font-sans mb-4">Unlock millennia of history, culture, hospitality & nature.</h1>
            <p className="text-gray-600 whitespace-pre-wrap pb-4">Gateway Malabar Holidays Pvt. Ltd. is an established Destination Management Company with multi operational offices in Kerala – the most exotic destination of India.</p>
            <p className="text-gray-600 whitespace-pre-wrap pb-4">With a vision to grow as a renowned Destination Management Company, we set fresh trends, and establish new standards for best practices in the tourism industry, by exceeding customer expectations.</p>
            <p className="text-gray-600 whitespace-pre-wrap pb-4">Our mission is to earn and maintain our clients’ trust at each one of our destinations by delivering services that exceed industry standards and customer expectations. We are also committed to meet client needs by providing exceptional product knowledge, creative solutions, cost effectiveness and value in every measurable way.</p>
            <p className="text-gray-600 whitespace-pre-wrap pb-4">With a proven track record in customer satisfaction and service, along with the shorter accessibility time from the Airports, the number of tourists have increased steadily. We have successfully made a niche into the areas particular with Arab tourists coming to this eco-haven for holidaying, Ayurvedic health care or for any other intentions combined with tourism. We make sure that your holiday does exactly what it is meant for- To rejuvenate your body, mind and soul.</p>

            <h1 className="text-2xl font-sans">And there’s no better way to see Kerala than through us:</h1>
            <p className="text-gray-600 whitespace-pre-wrap pb-4">We are reputed travel planners, with years of experience catering exclusively to the Gulf clientele.</p>
            <p className="text-gray-600 whitespace-pre-wrap pb-4">We offer sober clean packages, with professional guidance made available at every lap of your journey. We have efficient guides well versed in Arabic as well as English, providing you with the most personalized attention, to make your experience worthier. We provide airport pick up, and drop, and ensure that you stay in the best places everywhere.</p>
            <p className="text-gray-600 whitespace-pre-wrap pb-4">Now, all you need is to get in touch with us. And just take rest after that… For, we shall take care of the rest.</p>

            <h1 className="text-2xl font-sans pb-4">Our objectives:</h1>
            <li className="text-left">Individual Travel Leisure Groups.</li>
            <li className="text-left">Meetings and Incentives.</li>
            <li className="text-left">Exclusive Round trip tours.</li>
            <li className="text-left">Best valued hotels and resorts.</li>
            <li className="text-left">Luxury Fleet of Vehicles.</li>
            <li className="text-left">Create and Explore new destinations.</li>

            <hr className="my-4" />
            <p className="text-gray-700 whitespace-pre-wrap pb-2 font-semibold">With a commitment to create and provide the best value for our clientele, our partners and our team, we at Gateway Malabar Holidays welcome you to unlock the most exotic destination</p>       
            <hr className="my-4" />
          
          </div>

          <div>
            Ad.
          </div>

        </div>

 
        
    </main>
  )
}
export default Content