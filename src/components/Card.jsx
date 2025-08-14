import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";
import { Avatar } from "@/components/retroui/Avatar";
import hotelImg from "../assets/hotel.png";
import phoneImg from "../assets/telephone.png";
import earthImg from "../assets/earth.webp";
 
const TestimonialCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Card className="w-full max-w-[550px] shadow-none hover:shadow-md rounded-md">
        <Card.Content className="flex md:flex-col xl:flex-row md:items-center md:text-center pl-0 md:p-2 md:gap-2 md:py-4 lg:py-3">
            <Avatar className="h-16 w-24 md:w-20 xl:h-20 xl:w-44 rounded-none border-none my-auto mx-4">
              <Avatar.Image
                alt="avatar"
                src={hotelImg}
                className="w-full h-full"
              />
            </Avatar>
            <div className="mt-1 text-base lg:text-center xl:text-left">
              <Text className="font-bold md:px-1">
              Reserve Today, Pay During Your Stay
              </Text>
              <div className="py-1 md:px-1">Enjoy flexible booking with no upfront charges-plus, cancel for free on most listings.</div>
            </div>
        </Card.Content>
      </Card> 

      <Card className="w-full max-w-[550px] shadow-none hover:shadow-md rounded-md">
        <Card.Content className="flex md:flex-col xl:flex-row md:items-center md:text-center pl-0 md:p-2 md:gap-2 md:py-4 lg:py-3">
            <Avatar className="h-16 w-24 md:w-20 xl:h-20 xl:w-44 rounded-none border-none my-auto mx-4">
              <Avatar.Image
                alt="avatar"
                src={phoneImg}
                className="w-full h-full"
              />
            </Avatar>
            <div className="mt-1 text-base lg:text-center xl:text-left">
              <Text className="font-bold md:px-1">
              Explore Over 2 Million Stays Worldwide
              </Text>
              <div className="py-1 md:px-1">From nice hotels to comfy places and friendly guesthouses-we've got your stay.</div>
            </div>
        </Card.Content>
      </Card> 
      <Card className="w-full max-w-[550px] shadow-none hover:shadow-md rounded-md">
        <Card.Content className="flex md:flex-col xl:flex-row md:items-center md:text-center pl-0 md:p-2 md:gap-2 md:py-4 lg:py-3">
            <Avatar className="h-16 w-24 md:w-20 xl:h-20 xl:w-44 rounded-none border-none my-auto mx-4">
              <Avatar.Image
                alt="avatar"
                src={earthImg}
                className="w-full h-full"
              />
            </Avatar>
            <div className="mt-1 text-base lg:text-center xl:text-left">
              <Text className="font-bold md:px-1">
              Reliable Support, Anytime You Need It
              </Text>
              <div className="py-1 md:px-1">Whether day or night, our dedicated customer care team is just a message away.</div>
            </div>
        </Card.Content>
      </Card> 
    </div>
  );
}

export default TestimonialCard;